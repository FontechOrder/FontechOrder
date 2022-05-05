import React from 'react'

import useInitLoadingResultError from '@other-support/hooks/useInitLoadingResultError'

import { fetchEachOrderItemList } from '@supabase-folder/fetchData'
import useSubscription from '@supabase-folder/hooks/useSubscription'

import type {
  RealtimePayloadCallback,
  DatabaseOrderItemInterface,
  EachOrderItemDataInterface,
} from '@supabase-folder/types'

interface ListenDatabaseOrderInterface
  extends DatabaseOrderItemInterface {
  restaurant: number
  order: number
  user: number
}

const useEachOrderItemList = ({
  orderId,
  restaurantId,
}: {
  orderId: number
  restaurantId: number
}) => {
  const [orderItemList, setOrderItemList] =
    React.useState<
      Array<EachOrderItemDataInterface>
    >([])

  const momeFetchEachOrder = React.useCallback(
    () =>
      new Promise<
        Array<EachOrderItemDataInterface>
      >((resolve, reject) => {
        const asyncFetchEachOrder = async () => {
          try {
            const eachOrderItems =
              await fetchEachOrderItemList(
                orderId,
                restaurantId
              )

            resolve(eachOrderItems)
          } catch (error) {
            reject(error)
          }
        }

        asyncFetchEachOrder()
      }),
    [orderId, restaurantId]
  )

  const {
    isInit,
    isLoading,
    error,
    recall,
    result,
  } = useInitLoadingResultError({
    asyncCallback: momeFetchEachOrder,
  })

  // const insertCallback: RealtimePayloadCallback<ListenDatabaseOrderInterface> =
  //   React.useCallback(
  //     payload => {
  //       if (payload.errors) {
  //         return
  //       }

  //       const newOrderItem: ListenDatabaseOrderInterface =
  //         payload.new

  //       console.log(
  //         'useEachOrderItemList insertCallback newOrderItem: ',
  //         newOrderItem
  //       )

  //       if (!newOrderItem) {
  //         return
  //       }

  //       if (newOrderItem.order !== orderId) {
  //         return
  //       }

  //       if (
  //         newOrderItem.restaurant !== restaurantId
  //       ) {

  //         return
  //       }

  //       setOrderItemList(prevOrderItemList => [
  //         ...prevOrderItemList,
  //         newOrderItem,
  //       ])
  //     },
  //     [orderId, restaurantId]
  //   )
  const updateCallback: RealtimePayloadCallback<ListenDatabaseOrderInterface> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const updatedOrderItemId = payload.old?.id

        if (!updatedOrderItemId) {
          return
        }

        if (updatedOrderItemId < 1) {
          return
        }

        const newOrderItem: ListenDatabaseOrderInterface =
          payload.new

        if (!newOrderItem) {
          return
        }

        setOrderItemList(prevOrderItemList =>
          prevOrderItemList.map(each =>
            each.id === updatedOrderItemId
              ? {
                  ...each,
                  note: newOrderItem.note,
                  quantity: newOrderItem.quantity,
                  cost: newOrderItem.cost,
                  item_name:
                    newOrderItem.item_name,
                  item_type:
                    newOrderItem.item_type,
                }
              : each
          )
        )
      },
      [
        // orderId,
        // restaurantId
      ]
    )
  const deleteCallback: RealtimePayloadCallback<ListenDatabaseOrderInterface> =
    React.useCallback(
      payload => {
        if (payload.errors) {
          return
        }

        const deletedOrderItemId = payload.old?.id
        if (!deletedOrderItemId) {
          return
        }

        if (deletedOrderItemId <= 0) {
          return
        }

        setOrderItemList(prevOrderItemList =>
          prevOrderItemList.filter(
            each => each.id !== deletedOrderItemId
          )
        )
      },
      [
        // orderId,
        // restaurantId
      ]
    )

  useSubscription({
    path: 'order_items',
    // insertCallback,
    updateCallback,
    deleteCallback,
  })

  React.useEffect(() => {
    if (!result) {
      setOrderItemList([])
      return
    }

    setOrderItemList(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    orderItemList,
  }
}

export default useEachOrderItemList
