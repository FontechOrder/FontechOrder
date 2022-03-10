import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentSnapshotWithDataObjectList,
  OrderItemDocumentSnapshotWithDataObjectList,
} from '@firebase-folder/types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

import useLoadingHandler from '@other-support/Hooks/useLoadingHandler'
import useLoadingErrorHandler from '@other-support/Hooks/useLoadingErrorHandler'
import useInitHandler from '@other-support/Hooks/useInitHandler'

import {
  getDocumentData,
  initStringArray,
} from '@other-support/Consts'

import {
  getRestaurantDocFromOrderDoc,
  getMenuItemListFromRestaurantDoc,
  getOrderItemsFromOrderDoc,
} from '@other-support/Networks'

const useOrderDetail = ({
  pathSegments = initStringArray,
}: {
  pathSegments?: string[]
}) => {
  const {
    isLoadingHandler,
    isLoading,
    setError,
  } = useLoadingErrorHandler()

  const {
    isLoading: restaurantIsLoading,
    setIsLoading: restaurantSetIsLoading,
  } = useLoadingHandler()

  const {
    isLoading: orderItemsIsLoading,
    setIsLoading: orderItemsSetIsLoading,
  } = useLoadingHandler()

  const [orderDoc, setOrderDoc] = React.useState<
    DocumentDataSnapshot | undefined
  >(undefined)

  const [restaurantDoc, setRestaurantDoc] =
    React.useState<
      DocumentDataSnapshot | undefined
    >(undefined)

  const [orderItems, setOrderItems] =
    React.useState<OrderItemDocumentSnapshotWithDataObjectList>(
      []
    )

  const [menuItems, setMenuItems] =
    React.useState<DocumentSnapshotWithDataObjectList>(
      []
    )

  const order = React.useMemo(() => {
    return getDocumentData(orderDoc)
  }, [orderDoc])

  const restaurant = React.useMemo(() => {
    return getDocumentData(restaurantDoc)
  }, [restaurantDoc])

  const updateOrderItems = React.useCallback(
    (newOrderDoc: DocumentDataSnapshot) => {
      const asyncUpdateOrderItems = async () => {
        orderItemsSetIsLoading(true)
        setOrderItems([])

        try {
          const newOrderItems =
            await getOrderItemsFromOrderDoc(
              newOrderDoc
            )
          setOrderItems(newOrderItems)
        } catch {
          console.log(
            'do getOrderItemsFromOrderDoc error'
          )
        }

        orderItemsSetIsLoading(false)
      }

      asyncUpdateOrderItems()
    },
    [orderItemsSetIsLoading]
  )

  const updateRestaurant = React.useCallback(
    (newOrderDoc: DocumentDataSnapshot) => {
      const asyncUpdateRestaurant = async () => {
        restaurantSetIsLoading(true)
        setMenuItems([])
        const newRestaurantDoc =
          await getRestaurantDocFromOrderDoc(
            newOrderDoc
          )

        setRestaurantDoc(newRestaurantDoc)
        try {
          const newMenuItems =
            await getMenuItemListFromRestaurantDoc(
              newRestaurantDoc
            )

          setMenuItems(newMenuItems)
        } catch {
          console.log(
            'do getMenuItemListFromRestaurantDoc error'
          )
        }
        restaurantSetIsLoading(false)
      }

      asyncUpdateRestaurant()
    },
    [restaurantSetIsLoading]
  )

  const getOrderDocWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        // console.log('getOrderDocWithCallBack')
        const asyncGetOrderDoc = async () => {
          setError(undefined)
          setOrderDoc(undefined)
          setRestaurantDoc(undefined)
          try {
            const newOrderDoc =
              await getFireStoreDocPromise({
                path: 'orders',
                pathSegments,
              })

            setOrderDoc(newOrderDoc)

            await updateOrderItems(newOrderDoc)
            await updateRestaurant(newOrderDoc)
          } catch (getError) {
            const error =
              getError instanceof Error
                ? getError
                : new Error('getDocuments Error')
            setError(error)
          }
          callback()
        }

        asyncGetOrderDoc()
      },
      [
        pathSegments,
        setError,
        updateOrderItems,
        updateRestaurant,
      ]
    )

  const getOrderDoc = React.useCallback(() => {
    isLoadingHandler(getOrderDocWithCallBack)
  }, [isLoadingHandler, getOrderDocWithCallBack])

  const { isInit } = useInitHandler(getOrderDoc)

  return {
    isInit,
    isLoading,
    orderDoc,
    order,

    restaurant,
    restaurantDoc,
    restaurantIsLoading,

    menuItems,

    updateOrderItems,
    orderItems,
    orderItemsIsLoading,
  }
}

export default useOrderDetail
