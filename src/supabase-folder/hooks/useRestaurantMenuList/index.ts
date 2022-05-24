import React from 'react'
import fetchRestaurantMenuList from '@supabase-folder/functions/fetchRestaurantMenuList'

import useDynamicLoadingResultError from '@other-support/hooks/useDynamicLoadingResultError'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseMenuItemListType,
  DatabaseMenuItemType,
} from '@supabase-folder/types'

const useRestaurantMenuList = (
  restaurantId: number
) => {
  const [doOneFetch, setDoOneFetch] =
    React.useState(true)

  const [restaurantMenus, setRestaurantMenus] =
    React.useState<DatabaseMenuItemListType>([])

  const { isLoading, doAsyncFetchData } =
    useDynamicLoadingResultError()

  const doFetchRestaurantMenuList =
    React.useCallback(() => {
      const asyncFetchRestaurantMenuList =
        async () => {
          try {
            const restaurantMenuList =
              await fetchRestaurantMenuList(
                restaurantId
              )

            setRestaurantMenus(restaurantMenuList)
          } catch {}
        }

      doAsyncFetchData({
        asyncCallback:
          asyncFetchRestaurantMenuList,
        resultCallback: ({
          blockByIsLoading,
          // result,
          // error,
        }) => {
          console.log(
            'asyncFetchRestaurantMenuList blockByIsLoading: ',
            blockByIsLoading
          )
        },
      })
    }, [restaurantId, doAsyncFetchData])

  React.useEffect(() => {
    setDoOneFetch(false)
  }, [restaurantId])

  React.useEffect(() => {
    if (doOneFetch) {
      return
    }

    setDoOneFetch(true)

    doFetchRestaurantMenuList()
  }, [doOneFetch, doFetchRestaurantMenuList])

  const insertCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const newRestaurantMenu: DatabaseMenuItemType =
          payload.new

        if (!newRestaurantMenu) {
          return
        }

        if (
          newRestaurantMenu.restaurant_id !==
          restaurantId
        ) {
          return
        }

        setRestaurantMenus(oldRestaurantMenus => [
          ...oldRestaurantMenus,
          newRestaurantMenu,
        ])
      },
      [restaurantId]
    )
  const updateCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(payload => {
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

      const newRestaurantMenu: DatabaseMenuItemType =
        payload.new
      if (!newRestaurantMenu) {
        return
      }

      setRestaurantMenus(oldRestaurantMenus =>
        oldRestaurantMenus.map(restaurantMenu =>
          restaurantMenu.id ===
          updatedRestaurantMenuId
            ? newRestaurantMenu
            : restaurantMenu
        )
      )
    }, [])
  const deleteCallback: RealtimePayloadCallback<DatabaseMenuItemType> =
    React.useCallback(payload => {
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

      setRestaurantMenus(oldRestaurantMenus =>
        oldRestaurantMenus.filter(
          restaurantMenu =>
            restaurantMenu.id !==
            deletedRestaurantMenuId
        )
      )
    }, [])

  useSubscription({
    path: 'menu_items',
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  return {
    isLoading,
    restaurantMenus,
  }
}

export default useRestaurantMenuList
