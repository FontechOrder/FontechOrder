import fetchDataEach from '@supabase-folder/fetchData/each'

import {
  MenuItemWithItemOptionInterface,
  MenuItemOptionInterface,
} from '@supabase-folder/types'

import { menuItemOptionListGroupBy } from '@other-support/consts'

export const fetchMenuItemWithItemOptions =
  async (
    restaurantId: number
  ): Promise<
    Array<MenuItemWithItemOptionInterface>
  > => {
    const menuItemOptionList =
      await fetchDataEach<MenuItemOptionInterface>(
        {
          databaseString: 'menu_item_options',
          selectString:
            '*,restaurant(id),menu_item(id,hidden,name,cost,type)',
          eqs: [
            {
              id: restaurantId,
              eqString: 'restaurant.id',
            },
          ],
        }
      )

    const menuItemWithItemOptions =
      menuItemOptionListGroupBy(
        menuItemOptionList
      )

    return menuItemWithItemOptions
  }

export default fetchMenuItemWithItemOptions
