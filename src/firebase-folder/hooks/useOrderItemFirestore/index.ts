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
  // QueryDocumentSnapshot,
  // SnapshotOptions,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

// import type {
//   OrderItem,
//   // OrderItemItem,
// } from '@other-support/Types'

import type {
  OrderItem,
  OrderItemItem,
} from '@firebase-folder/types'

const useOrderItemFirestore = ({
  orderId,
}: {
  orderId?: string
}) => {
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
        console.log('no restaurant name')
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
          console.log('no data')
          return
        }

        const orderWithDocDataResult =
          await setOrderWithDocData({
            doc: eachOrderItem,
            docData: eachOrderItemData,
          })

        if (!orderWithDocDataResult) {
          return
        }

        const itemsSnapshot = await getDocs(
          collection(orderDoc, 'items')
          // ).withConverter({
          //   toFirestore: (
          //     orderItemItem: OrderItemItem
          //   ) => ({
          //     cost: orderItemItem.cost,
          //     'item-name':
          //       orderItemItem['item-name'],
          //     'user-reference':
          //       orderItemItem['user-reference'],
          //   }),
          //   fromFirestore: (
          //     snapshot: QueryDocumentSnapshot,
          //     options: SnapshotOptions
          //   ): OrderItemItem | undefined => {
          //     const data = snapshot.data(options)

          //     if (!data) {
          //       return undefined
          //     }

          //     console.log(
          //       'fromFirestore data: ',
          //       data
          //     )

          //     if (isNaN(data.cost)) {
          //       return undefined
          //     }

          //     if (!data['item-name']) {
          //       return undefined
          //     }

          //     if (!data['user-reference']) {
          //       return undefined
          //     }

          //     return {
          //       id: snapshot.id,
          //       cost: data.cost,
          //       'item-name': data['item-name'],
          //       'user-reference':
          //         data['user-reference'],
          //     }
          //   },
          // })
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

                if (isNaN(orderItemData.cost)) {
                  return undefined
                }

                if (!orderItemData['item-name']) {
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
                  console.log('no user name')
                  return undefined
                }

                return {
                  id: each.id,
                  cost: orderItemData.cost,
                  'item-name':
                    orderItemData['item-name'],
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
    order,
    orderItemItems,
    deleteOrder,
  }
}

export default useOrderItemFirestore
