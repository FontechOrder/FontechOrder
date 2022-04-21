import { supabase } from '@supabase-folder/client'

import type { CreateRestaurantMenuSchemaType } from '@other-support/types'

import type { DatabaseMenuItemListType } from '@supabase-folder/types'

const createRestaurantMenuList = async ({
  restaurantMenuList,
  restaurantId,
}: {
  restaurantMenuList: CreateRestaurantMenuSchemaType
  restaurantId: number
}): Promise<void> => {
  // console.log(
  //   'createRestaurantMenuList restaurantId: ',
  //   restaurantId
  // )
  // console.log(
  //   'createRestaurantMenuList restaurantMenuList: ',
  //   restaurantMenuList
  // )

  const {
    data: menuItemData,
    error: menuItemError,
  } = await supabase.from('menu_items').insert(
    restaurantMenuList.menuItems.map(
      menuItem => ({
        hidden: menuItem.hidden,
        name: menuItem.name,
        type: menuItem.type,
        cost: menuItem.cost,
        restaurant: restaurantId,
      })
    )
  )

  if (menuItemError) {
    throw new Error('insert menu_items error')
  }

  const menuItems: DatabaseMenuItemListType =
    menuItemData ?? []
  if (!menuItems) {
    throw new Error('invalid menuItems')
  }

  if (
    menuItems.length !==
    restaurantMenuList.menuItems.length
  ) {
    throw new Error('Something Error')
  }

  // console.log('insert menuItems: ', menuItems)

  const restaurantMenuOptionList =
    menuItems.flatMap((menuItem, index) => {
      const menuItemOptions =
        restaurantMenuList.menuItems[index]
          .menuItemOptions

      return menuItemOptions.map(
        menuItemOption => ({
          name: menuItemOption.name,
          type: `${menuItem.type}.${menuItem.name}`,
          cost: menuItemOption.cost,
          restaurant: restaurantId,
          menu_item: menuItem.id,
        })
      )
    })

  console.log(
    'insert restaurantMenuOptionList: ',
    restaurantMenuOptionList
  )

  const {
    data: menuItemOptionData,
    error: menuItemOptionError,
  } = await supabase
    .from('menu_item_options')
    .insert(
      menuItems.flatMap((menuItem, index) => {
        const menuItemOptions =
          restaurantMenuList.menuItems[index]
            .menuItemOptions

        return menuItemOptions.map(
          menuItemOption => ({
            name: menuItemOption.name,
            type: `${menuItem.type}.${menuItem.name}`,
            cost: menuItemOption.cost,
            restaurant: restaurantId,
            menu_item: menuItem.id,
          })
        )
      })
    )

  if (menuItemOptionError) {
    throw new Error(
      'insert menu_item_options error'
    )
  }

  const menuItemOptions: DatabaseMenuItemListType =
    menuItemOptionData ?? []

  if (!menuItemOptions) {
    throw new Error('invalid menuItemOptions')
  }

  // console.log(
  //   'insert menuItemOptions: ',
  //   menuItemOptions
  // )
}

export default createRestaurantMenuList
