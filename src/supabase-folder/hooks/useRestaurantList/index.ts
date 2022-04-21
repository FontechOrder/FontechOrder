import React from 'react'
import fetchRestaurantList from '@supabase-folder/functions/fetchRestaurantList'
import useInitLoadingResultError from '@other-support/hooks/useInitLoadingResultError'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseRestaurantType,
  DatabaseRestaurantListType,
} from '@supabase-folder/types'

const useRestaurantList = () => {
  const [restaurants, setRestaurants] =
    React.useState<DatabaseRestaurantListType>([])

  const {
    isInit,
    isLoading,
    error,
    recall,
    result,
  } = useInitLoadingResultError({
    asyncCallback: fetchRestaurantList,
  })

  const insertCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const newRestaurant: DatabaseRestaurantType =
          payload.new
        if (!newRestaurant) {
          return
        }

        setRestaurants([
          ...restaurants,
          newRestaurant,
        ])
      },
      [restaurants]
    )
  const updateCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const updatedRestaurantId =
          payload.old?.id

        if (!updatedRestaurantId) {
          return
        }

        if (updatedRestaurantId <= 0) {
          return
        }

        const newRestaurant: DatabaseRestaurantType =
          payload.new
        if (!newRestaurant) {
          return
        }

        const newRestaurants = restaurants.map(
          restaurant =>
            restaurant.id === updatedRestaurantId
              ? newRestaurant
              : restaurant
        )

        setRestaurants(newRestaurants)
      },
      [restaurants]
    )
  const deleteCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const deletedRestaurantId =
          payload.old?.id
        if (!deletedRestaurantId) {
          return
        }

        if (deletedRestaurantId <= 0) {
          return
        }

        setRestaurants(
          restaurants.filter(
            restaurant =>
              restaurant.id !==
              deletedRestaurantId
          )
        )
      },
      [restaurants]
    )

  useSubscription({
    path: 'restaurants',
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  React.useEffect(() => {
    if (!result) {
      setRestaurants([])
      return
    }

    setRestaurants(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    restaurants,
  }
}

export default useRestaurantList
