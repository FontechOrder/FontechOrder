import React from 'react'

import useInitLoadingResultError from '@other-support/hooks/useInitLoadingResultError'

import fetchEachRestaurantMenus from '@supabase-folder/functions/fetchEachRestaurantMenus'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseMenuItemType,
  DatabaseMenuItemListType,
} from '@supabase-folder/types'

const useEachRestaurantMenus = (id: number) => {
  const [restaurantMenus, setRestaurantMenus] =
    React.useState<DatabaseMenuItemListType>([])

  const asyncCallback = React.useCallback(() => {
    return fetchEachRestaurantMenus(id)
  }, [id])

  const {
    isInit,
    isLoading,
    error,
    recall,
    result,
  } = useInitLoadingResultError({
    asyncCallback: async () =>
      await asyncCallback(),
  })

  // console.log(
  //   'useEachRestaurantMenus result: ',
  //   result
  // )

  const insertCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const newRestaurantMenu = payload.new
        if (!newRestaurantMenu) {
          return
        }

        setRestaurantMenus([
          ...restaurantMenus,
          newRestaurantMenu,
        ])
      },
      [restaurantMenus]
    )
  const updateCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const updatedRestaurantMenuId =
          payload.old?.id

        if (!updatedRestaurantMenuId) {
          return
        }

        if (updatedRestaurantMenuId <= 0) {
          return
        }

        const newRestaurantMenu = payload.new
        if (!newRestaurantMenu) {
          return
        }

        const newRestaurantMenus =
          restaurantMenus.map(restaurantMenu =>
            restaurantMenu.id ===
            updatedRestaurantMenuId
              ? newRestaurantMenu
              : restaurantMenu
          )

        setRestaurantMenus(newRestaurantMenus)
      },
      [restaurantMenus]
    )
  const deleteCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const deletedRestaurantMenuId =
          payload.old?.id
        if (!deletedRestaurantMenuId) {
          return
        }

        if (deletedRestaurantMenuId <= 0) {
          return
        }

        setRestaurantMenus(
          restaurantMenus.filter(
            restaurantMenu =>
              restaurantMenu.id !==
              deletedRestaurantMenuId
          )
        )
      },
      [restaurantMenus]
    )

  useSubscription({
    path: `menu_items:restaurant=eq.${id}`,
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  React.useEffect(() => {
    // console.log(
    //   'setRestaurantMenus with result change'
    // )

    if (!result) {
      setRestaurantMenus([])
      return
    }

    setRestaurantMenus(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    restaurantMenus,
  }
}

export default useEachRestaurantMenus
