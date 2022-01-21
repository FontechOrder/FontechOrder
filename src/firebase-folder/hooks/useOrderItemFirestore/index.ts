import React from 'react'

import {
  doc,
  deleteDoc,
  collection,
  onSnapshot,
  getDoc,
  getDocs,
} from 'firebase/firestore'

import type {
  DocumentSnapshot,
  DocumentReference,
  DocumentData,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

import type {
  OrderItem,
  OrderItemItem,
} from '@firebase-folder/types'

const useOrderItemFirestore = ({
  orderId,
}: {
  orderId?: string
}) => {
  const [isFirst, setIsFirst] =
    React.useState(true)
  const [order, setOrder] = React.useState<
    OrderItem | undefined
  >(undefined)
  const [orderItemItems, setOrderItemItems] =
    React.useState(Array<OrderItemItem>())

  const deleteOrder =
    async (): Promise<boolean> => {
      try {
        if (!orderId) {
          throw new Error('Invalid order ID')
        }

        await deleteDoc(
          doc(
            firebaseFirestore,
            'orders',
            orderId
          )
        )
      } catch {
        return false
      }

      return true
    }

  React.useEffect(() => {
    if (!orderId) {
      setIsFirst(false)
      return
    }

    const orderDoc = doc(
      firebaseFirestore,
      'orders',
      orderId
    )

    const setOrderWithDocData = async ({
      doc,
      docData,
    }: {
      doc: DocumentSnapshot<DocumentData>
      docData: DocumentData
    }): Promise<boolean> => {
      if (docData.finished) {
        if (!docData['restaurant-name']) {
          return false
        }

        setOrder({
          id: doc.id,
          finished: docData.finished,
          'restaurant-name':
            docData['restaurant-name'],
          'storage-path': docData['storage-path'],
        })
        return true
      }

      const restaurantReference = docData[
        'restaurant-reference'
      ] as DocumentReference<DocumentData>

      if (!restaurantReference) {
        return false
      }

      const restaurantSnap = await getDoc(
        restaurantReference
      )

      if (!restaurantSnap.exists()) {
        return false
      }

      const restaurantData = restaurantSnap.data()

      if (!restaurantData.name) {
        return false
      }

      setOrder({
        id: doc.id,
        finished: docData.finished,
        'restaurant-name': restaurantData.name,
        'restaurant-reference':
          restaurantReference,
        'storage-path':
          restaurantData['storage-path'],
      })

      return true
    }

    const unsub = onSnapshot(
      orderDoc,
      async eachOrderItem => {
        setOrder(undefined)
        setOrderItemItems([])

        const eachOrderItemData =
          eachOrderItem.data()

        if (!eachOrderItemData) {
          setIsFirst(false)
          return
        }

        const orderWithDocDataResult =
          await setOrderWithDocData({
            doc: eachOrderItem,
            docData: eachOrderItemData,
          })

        setIsFirst(false)

        if (!orderWithDocDataResult) {
          return
        }

        const itemsSnapshot = await getDocs(
          collection(orderDoc, 'items')
        )

        const itemsSnapshotResults =
          await Promise.all(
            itemsSnapshot.docs.map(
              async (
                each
              ): Promise<
                OrderItemItem | undefined
              > => {
                const orderItemData = each.data()

                if (!orderItemData) {
                  return undefined
                }

                const menuItemReference =
                  orderItemData[
                    'menu-item-reference'
                  ] as DocumentReference<DocumentData>

                if (!menuItemReference) {
                  return undefined
                }

                const menuItemSnap = await getDoc(
                  menuItemReference
                )

                if (!menuItemSnap.exists()) {
                  return undefined
                }

                const menuItemData =
                  menuItemSnap.data()

                if (!menuItemData['item-name']) {
                  return undefined
                }

                if (isNaN(menuItemData.cost)) {
                  return undefined
                }

                const userReference =
                  orderItemData[
                    'user-reference'
                  ] as DocumentReference<DocumentData>

                if (!userReference) {
                  return undefined
                }

                const userSnap = await getDoc(
                  userReference
                )

                if (!userSnap.exists()) {
                  return undefined
                }

                const userData = userSnap.data()

                if (!userData.name) {
                  return undefined
                }

                return {
                  id: each.id,
                  cost: menuItemData.cost,
                  'item-name':
                    menuItemData['item-name'],
                  'user-reference': userReference,
                  'user-name': userData.name,
                }
              }
            )
          )

        const filteredItemsSnapshotResults =
          itemsSnapshotResults.filter(
            each => each
          ) as OrderItemItem[]

        setOrderItemItems(
          filteredItemsSnapshotResults
        )
      }
    )

    return () => {
      unsub()
    }
  }, [orderId])

  return {
    isFirst,
    order,
    orderItemItems,
    deleteOrder,
  }
}

export default useOrderItemFirestore
