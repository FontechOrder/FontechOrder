import React from 'react'
import { useDispatch } from 'react-redux'

import type { DatabaseOrderInterface } from '@supabase-folder/types'

import fetchOrderList from '@supabase-folder/functions/fetchOrderList'

import {
  instanceError,
  UnexpectedError,
} from '@other-support/consts'

import {
  saveOrderList,
  clearOrderList,
} from '@redux-folder/reducers/orderListManagerState/action'

import useOrderListManagerDefault from '@redux-folder/hooks/useOrderListManager/default'

export const useOrderListManager = () => {
  const dispatch = useDispatch()

  const { orders } = useOrderListManagerDefault()

  const doFetchOrderListWithCallback =
    React.useCallback(
      (callback: (error?: Error) => void) => {
        const doAsyncFetchOrderList =
          async () => {
            try {
              const orders =
                await fetchOrderList()
              // console.log(
              //   'doFetchOrderListWithCallback orders: ',
              //   orders
              // )
              dispatch(saveOrderList(orders))
              callback()
            } catch (error) {
              callback(
                instanceError(error) ||
                  UnexpectedError
              )
            }
          }

        doAsyncFetchOrderList()
      },
      [dispatch]
    )

  const doSaveOrderList = React.useCallback(
    (orders: Array<DatabaseOrderInterface>) => {
      dispatch(saveOrderList(orders))
    },
    [dispatch]
  )

  const doClearOrderList =
    React.useCallback(() => {
      dispatch(clearOrderList())
    }, [dispatch])

  return {
    doFetchOrderListWithCallback,
    doSaveOrderList,
    doClearOrderList,
    orders,
  }
}

export default useOrderListManager
