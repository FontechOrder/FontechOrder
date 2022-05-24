import React from 'react'
import { useDispatch } from 'react-redux'

import type { DatabaseRestaurantInterface } from '@supabase-folder/types'

import {
  saveRestaurantList,
  clearRestaurantList,
} from '@redux-folder/reducers/restaurantListManagerState/action'

import useRestaurantListManagerDefault from '@redux-folder/hooks/useRestaurantListManager/default'

export const useRestaurantListManager = () => {
  const dispatch = useDispatch()

  const { restaurantList } =
    useRestaurantListManagerDefault()

  const doSaveRestaurantList = React.useCallback(
    (
      restaurants: Array<DatabaseRestaurantInterface>
    ) => {
      dispatch(saveRestaurantList(restaurants))
    },
    [dispatch]
  )

  const doClearRestaurantList =
    React.useCallback(() => {
      dispatch(clearRestaurantList())
    }, [dispatch])

  return {
    doSaveRestaurantList,
    doClearRestaurantList,
    restaurantList,
  }
}

export default useRestaurantListManager
