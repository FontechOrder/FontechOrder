import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentDataReference,
} from '@firebase-folder/types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'
// import getFireStoreCollectionPromise from '@firebase-folder/functions/getFireStoreCollectionPromise'
import useLoadingErrorHandler from '@other-support/Hooks/useLoadingErrorHandler'
import useInitHandler from '@other-support/Hooks/useInitHandler'

import { getDocumentData } from '@other-support/Consts'

const useOrderRestaurant = (
  orderDoc: DocumentDataSnapshot
) => {
  const {
    isLoading,
    error,
    setError,
    isLoadingHandler,
  } = useLoadingErrorHandler()

  const [restaurantDoc, setRestaurantDoc] =
    React.useState<
      DocumentDataSnapshot | undefined
    >(undefined)

  const order = React.useMemo(() => {
    return getDocumentData(orderDoc)
  }, [orderDoc])

  const restaurant = React.useMemo(() => {
    return getDocumentData(restaurantDoc)
  }, [restaurantDoc])

  const getRestaurantDocWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        const asyncGetRestaurantDoc =
          async () => {
            setRestaurantDoc(undefined)
            setError(undefined)
            try {
              if (!order) {
                throw new Error('order not found')
              }

              const restaurantReference: DocumentDataReference =
                order['restaurant-reference']

              if (!restaurantReference.path) {
                throw new Error(
                  'restaurantReference path not found'
                )
              }

              const doc =
                await getFireStoreDocPromise({
                  path: restaurantReference.path,
                })
              setRestaurantDoc(doc)
            } catch (getError) {
              const error =
                getError instanceof Error
                  ? getError
                  : new Error(
                      'getRestaurantDoc Error'
                    )
              setError(error)
            }

            callback()
          }

        asyncGetRestaurantDoc()
      },
      [order, setError]
    )

  const getRestaurantDoc =
    React.useCallback(() => {
      isLoadingHandler(
        getRestaurantDocWithCallBack
      )
    }, [
      isLoadingHandler,
      getRestaurantDocWithCallBack,
    ])

  React.useCallback(() => {
    const asyncGetRestaurantDoc = async () => {
      try {
        if (!order) {
          throw new Error('order not found')
        }

        const restaurantReference: DocumentDataReference =
          order['restaurant-reference']

        if (!restaurantReference.path) {
          throw new Error(
            'restaurantReference path not found'
          )
        }

        const doc = await getFireStoreDocPromise({
          path: restaurantReference.path,
        })
        setRestaurantDoc(doc)
      } catch {}
    }

    asyncGetRestaurantDoc()
  }, [order])

  const { isInit } = useInitHandler(
    getRestaurantDoc
  )

  const restaurantName = React.useMemo(() => {
    const getRestaurantName: string =
      restaurant?.name

    if (!getRestaurantName) {
      return ''
    }

    return getRestaurantName
  }, [restaurant])

  return {
    isInit,
    isLoading,
    error,
    order,
    restaurant,
    restaurantDoc,
    restaurantName,
  }
}

export default useOrderRestaurant
