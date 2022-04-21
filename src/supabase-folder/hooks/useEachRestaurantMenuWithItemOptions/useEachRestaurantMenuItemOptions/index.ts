import React from 'react'

import useInitLoadingResultError from '@other-support/hooks/useInitLoadingResultError'

import fetchEachRestaurantMenuItemOptions from '@supabase-folder/functions/fetchEachRestaurantMenuItemOptions'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseMenuItemOptionListType,
  DatabaseMenuItemOptionType,
} from '@supabase-folder/types'

const useEachRestaurantMenuItemOptions = (
  id: number
) => {
  const [
    restaurantMenuItemOptions,
    setRestaurantMenuItemOptions,
  ] = React.useState<DatabaseMenuItemOptionListType>(
    []
  )

  const asyncCallback = React.useCallback(() => {
    return fetchEachRestaurantMenuItemOptions(id)
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

  const insertCallback: RealtimePayloadCallback<DatabaseMenuItemOptionType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const newMenuItemOption = payload.new
        if (!newMenuItemOption) {
          return
        }

        setRestaurantMenuItemOptions([
          ...restaurantMenuItemOptions,
          newMenuItemOption,
        ])
      },
      [restaurantMenuItemOptions]
    )
  const updateCallback: RealtimePayloadCallback<DatabaseMenuItemOptionType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const updatedRestaurantMenuItemOptionId =
          payload.old?.id

        if (!updatedRestaurantMenuItemOptionId) {
          return
        }

        if (
          updatedRestaurantMenuItemOptionId <= 0
        ) {
          return
        }

        const newRestaurantMenuItemOption =
          payload.new
        if (!newRestaurantMenuItemOption) {
          return
        }

        const newRestaurantMenuItemOptions =
          restaurantMenuItemOptions.map(
            restaurantMenuItemOption =>
              restaurantMenuItemOption.id ===
              updatedRestaurantMenuItemOptionId
                ? newRestaurantMenuItemOption
                : restaurantMenuItemOption
          )

        setRestaurantMenuItemOptions(
          newRestaurantMenuItemOptions
        )
      },
      [restaurantMenuItemOptions]
    )
  const deleteCallback: RealtimePayloadCallback<DatabaseMenuItemOptionType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const deletedRestaurantMenuItemOptionId =
          payload.old?.id
        if (!deletedRestaurantMenuItemOptionId) {
          return
        }

        if (
          deletedRestaurantMenuItemOptionId <= 0
        ) {
          return
        }

        setRestaurantMenuItemOptions(
          restaurantMenuItemOptions.filter(
            restaurantMenuItemOption =>
              restaurantMenuItemOption.id !==
              deletedRestaurantMenuItemOptionId
          )
        )
      },
      [restaurantMenuItemOptions]
    )

  useSubscription({
    path: `menu_item_options:restaurant=eq.${id}`,
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  React.useEffect(() => {
    // console.log(
    //   'setRestaurantMenuItemOptions with result change'
    // )

    if (!result) {
      setRestaurantMenuItemOptions([])
      return
    }

    setRestaurantMenuItemOptions(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    restaurantMenuItemOptions,
  }
}

export default useEachRestaurantMenuItemOptions
