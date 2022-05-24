import React from 'react'

import useEachRestaurantMenuItemOptions from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions/useEachRestaurantMenuItemOptions'
import useEachRestaurantMenus from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions/useEachRestaurantMenus'

import type { RestaurantMenuWithItemOptionListType } from '@supabase-folder/types'

const useEachRestaurantMenuWithItemOptions = (
  id: number
) => {
  const {
    isInit: itemIsInit,
    isLoading: itemIsLoading,
    error: itemError,
    restaurantMenus,
  } = useEachRestaurantMenus(id)

  const {
    isInit: itemOptionIsInit,
    isLoading: itemOptionIsLoading,
    error: itemOptionError,
    restaurantMenuItemOptions,
  } = useEachRestaurantMenuItemOptions(id)

  const menuInit = React.useMemo(() => {
    return itemIsInit || itemOptionIsInit
  }, [itemIsInit, itemOptionIsInit])

  const menuIsLoading = React.useMemo(() => {
    return itemIsLoading || itemOptionIsLoading
  }, [itemIsLoading, itemOptionIsLoading])

  const menuError = React.useMemo(() => {
    return itemError || itemOptionError
  }, [itemError, itemOptionError])

  const restaurantMenuWithItemOptions: RestaurantMenuWithItemOptionListType =
    React.useMemo(() => {
      return restaurantMenus.map(
        restaurantMenu => ({
          ...restaurantMenu,
          itemOptions:
            restaurantMenuItemOptions.filter(
              itemOption =>
                itemOption.menu_item_id ===
                restaurantMenu.id
            ),
        })
      )
    }, [
      restaurantMenus,
      restaurantMenuItemOptions,
    ])
  return {
    menuInit,
    menuIsLoading,
    menuError,
    restaurantMenuWithItemOptions,
  }
}

export default useEachRestaurantMenuWithItemOptions
