import React from 'react'
import { useDispatch } from 'react-redux'
import type { Dispatch } from 'redux'

import type { DatabaseOrderInterface } from '@supabase-folder/types'

import fetchOrderList from '@supabase-folder/functions/fetchOrderList'

import { forceInstanceError } from '@other-support/consts'

import {
  saveOrderList,
  setIsLoading,
  clearOrderListManager,
} from '@redux-folder/reducers/orderListManagerState/action'

import useOrderListManagerDefault from '@redux-folder/hooks/useOrderListManager/default'

export const useOrderListManager = () => {
  const dispatch = useDispatch()

  const { isInit, isLoading, orderList } =
    useOrderListManagerDefault()

  const doSetIsLoading = React.useCallback(
    (isLoading: boolean) =>
      dispatch(setIsLoading(isLoading)),
    [dispatch]
  )

  const doSaveOrderList = React.useCallback(
    (orders: Array<DatabaseOrderInterface>) =>
      dispatch((dispatch: Dispatch) => {
        dispatch(setIsLoading(false))
        dispatch(saveOrderList(orders))
      }),
    [dispatch]
  )

  const doClearOrderList =
    React.useCallback(() => {
      dispatch(clearOrderListManager())
    }, [dispatch])

  const doFetchOrderListWithCallback =
    React.useCallback(
      (
        callback?: ({
          pauseByLoading,
          error,
        }: {
          pauseByLoading: boolean
          error?: Error
        }) => void
      ) => {
        if (isLoading) {
          const callbackObject = {
            pauseByLoading: true,
          }
          callback?.(callbackObject)
          return
        }

        doSetIsLoading(true)

        fetchOrderList()
          .then(orders => {
            doSaveOrderList(orders)
            const callbackObject = {
              pauseByLoading: false,
            }
            callback?.(callbackObject)
          })
          .catch(error => {
            const callbackObject = {
              pauseByLoading: false,
              error: forceInstanceError(error),
            }
            callback?.(callbackObject)
            doSetIsLoading(false)
          })
      },
      [isLoading, doSetIsLoading, doSaveOrderList]
    )

  return {
    isInit,
    isLoading,
    doFetchOrderListWithCallback,
    doSetIsLoading,
    doSaveOrderList,
    doClearOrderList,
    orderList,
  }
}

export default useOrderListManager
