import React from 'react'
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import type { DatabaseRestaurantListType } from '@supabase-folder/types'

import {
  saveRestaurantList,
  clearRestaurantList,
} from '@redux-folder/reducers/restaurantListManagerState/action'

export const useRestaurantListManager = () => {
  const dispatch = useDispatch()

  const { restaurantList } = useSelector(
    state => ({
      restaurantList:
        state.restaurantListManagerState
          .restaurantList,
    }),
    shallowEqual
  )

  const doSaveRestaurantList = React.useCallback(
    (
      restaurantList: DatabaseRestaurantListType
    ) => {
      dispatch(saveRestaurantList(restaurantList))
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
