import React from 'react'

import fetchEachRestaurant from '@supabase-folder/functions/fetchEachRestaurant'
import useInitLoadingResultError from '@other-support/Hooks/useInitLoadingResultError'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseRestaurantType,
} from '@supabase-folder/types'

const useEachRestaurant = (id: number) => {
  const [restaurant, setRestaurant] =
    React.useState<
      DatabaseRestaurantType | undefined
    >(undefined)

  const momeFetchEachRestaurant =
    React.useCallback(
      () => fetchEachRestaurant(id),
      [id]
    )

  const {
    isInit,
    isLoading,
    error,
    recall,
    result,
  } = useInitLoadingResultError({
    asyncCallback: momeFetchEachRestaurant,
  })

  const insertCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(payload => {
      if (payload.errors) {
        return
      }

      const newRestaurant = payload.new

      if (!newRestaurant) {
        return
      }

      setRestaurant(newRestaurant)
    }, [])
  const updateCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(payload => {
      if (payload.errors) {
        return
      }

      const newRestaurant = payload.new

      if (!newRestaurant) {
        return
      }

      setRestaurant(newRestaurant)
    }, [])
  const deleteCallback: RealtimePayloadCallback<DatabaseRestaurantType> =
    React.useCallback(payload => {
      if (payload.errors) {
        return
      }

      setRestaurant(undefined)
    }, [])

  useSubscription({
    path: `restaurants:id=eq.${id}`,
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  React.useEffect(() => {
    console.log(
      'setRestaurant with result change'
    )

    setRestaurant(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    restaurant,
  }
}

export default useEachRestaurant
