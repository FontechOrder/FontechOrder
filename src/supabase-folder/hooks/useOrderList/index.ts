import React from 'react'

import useSubscription from '@supabase-folder/hooks/useSubscription'

import useOrderListManager from '@redux-folder/hooks/useOrderListManager'

import type {
  RealtimePayloadCallback,
  DatabaseOrderInterface,
} from '@supabase-folder/types'

const useOrderList = () => {
  const {
    doFetchOrderListWithCallback,
    doSaveOrderList,
    doClearOrderList,
    orderList,
  } = useOrderListManager()

  const insertCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const newOrder: DatabaseOrderInterface =
          payload.new
        if (!newOrder) {
          return
        }

        doSaveOrderList([...orderList, newOrder])
      },
      [doSaveOrderList, orderList]
    )
  const updateCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const updatedOrderId = payload.old?.id

        if (!updatedOrderId) {
          return
        }

        if (updatedOrderId <= 0) {
          return
        }

        const newOrder: DatabaseOrderInterface =
          payload.new
        if (!newOrder) {
          return
        }

        const newOrders = orderList.map(order =>
          order.id === updatedOrderId
            ? newOrder
            : order
        )

        doSaveOrderList(newOrders)
      },
      [doSaveOrderList, orderList]
    )
  const deleteCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const deletedOrderId = payload.old?.id
        if (!deletedOrderId) {
          return
        }

        if (deletedOrderId <= 0) {
          return
        }

        doSaveOrderList(
          orderList.filter(
            order => order.id !== deletedOrderId
          )
        )
      },
      [doSaveOrderList, orderList]
    )

  useSubscription({
    path: 'orders',
    insertCallback,
    updateCallback,
    deleteCallback,
  })

  return {
    doFetchOrderListWithCallback,
    doClearOrderList,
    orderList,
  }
}

export default useOrderList
