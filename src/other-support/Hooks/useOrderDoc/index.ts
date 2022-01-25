import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentDataReference,
} from '@firebase-folder/types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'
import getFireStoreCollectionPromise from '@firebase-folder/functions/getFireStoreCollectionPromise'

import { getDocumentData } from '@other-support/Consts'

const useOrderDoc = (
  orderDoc: DocumentDataSnapshot
) => {
  const [restaurantDoc, setRestaurantDoc] =
    React.useState<
      DocumentDataSnapshot | undefined
    >(undefined)

  const [menuItemDocs, setMenuItemDocs] =
    React.useState(Array<DocumentDataSnapshot>())
  const [orderItemDocs, setOrderItemDocs] =
    React.useState(Array<DocumentDataSnapshot>())

  const order = React.useMemo(() => {
    return getDocumentData(orderDoc)
  }, [orderDoc])

  const restaurant = React.useMemo(() => {
    return getDocumentData(restaurantDoc)
  }, [restaurantDoc])

  const getRestaurantDoc =
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

          const doc =
            await getFireStoreDocPromise({
              path: restaurantReference.path,
            })
          setRestaurantDoc(doc)
        } catch {}
      }

      asyncGetRestaurantDoc()
    }, [order])

  const getMenuItemList =
    React.useCallback(() => {
      const asyncGetMenuItemList = async () => {
        try {
          if (!restaurantDoc) {
            throw new Error(
              'restaurantDoc not found'
            )
          }

          const docs =
            await getFireStoreCollectionPromise({
              documentReference:
                restaurantDoc.ref,
              path: 'menuItems',
              // orderByKey: 'item-name',
            })

          setMenuItemDocs(
            docs.filter(each => each.data())
          )
        } catch {}
      }

      asyncGetMenuItemList()
    }, [restaurantDoc])

  const getOrderItemDocs =
    React.useCallback(() => {
      const asyncGetOrderItemDocs = async () => {
        try {
          const docs =
            await getFireStoreCollectionPromise({
              documentReference: orderDoc.ref,
              path: 'items',
            })

          setOrderItemDocs(docs)
        } catch {}
      }

      asyncGetOrderItemDocs()
    }, [orderDoc])

  React.useEffect(() => {
    getRestaurantDoc()
  }, [getRestaurantDoc])

  React.useEffect(() => {
    getMenuItemList()
  }, [getMenuItemList])

  React.useEffect(() => {
    getOrderItemDocs()
  }, [getOrderItemDocs])

  return {
    order,
    restaurant,
    restaurantDoc,
    menuItemDocs,
    orderItemDocs,
    getOrderItemDocs,
  }
}

export default useOrderDoc
