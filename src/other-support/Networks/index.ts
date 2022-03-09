import type {
  DocumentDataSnapshot,
  DocumentSnapshotWithDataObject,
  DocumentSnapshotWithDataObjectList,
} from '@firebase-folder/types'

import {
  getDocumentData,
  getDocFromReference,
} from '@other-support/Consts'

import getFireStoreCollectionPromise from '@firebase-folder/functions/getFireStoreCollectionPromise'

export const getRestaurantDocFromOrderDoc =
  async (
    orderDoc: DocumentDataSnapshot | undefined
  ): Promise<DocumentDataSnapshot> => {
    try {
      const restaurantDoc =
        await getDocFromReference({
          targetDoc: orderDoc,
          key: 'restaurant-reference',
        })
      return restaurantDoc
    } catch {
      throw new Error(
        'getRestaurantDocFromOrderDoc fail'
      )
    }
  }

export const getOrderItemUserDocFromOrderItemDoc =
  async (
    orderItemDoc: DocumentDataSnapshot | undefined
  ): Promise<DocumentDataSnapshot> => {
    try {
      const userDoc = await getDocFromReference({
        targetDoc: orderItemDoc,
        key: 'user-reference',
      })
      return userDoc
    } catch {
      throw new Error(
        'getOrderItemUserDocFromOrderItemDoc fail'
      )
    }
  }

export const getMenuItemDocFromOrderItemDoc =
  async (
    orderItemDoc: DocumentDataSnapshot | undefined
  ): Promise<DocumentDataSnapshot> => {
    try {
      const menuItemDoc =
        await getDocFromReference({
          targetDoc: orderItemDoc,
          key: 'menu-item-reference',
        })
      return menuItemDoc
    } catch {
      throw new Error(
        'getMenuItemDocFromOrderItemDoc fail'
      )
    }
  }

type OrderItemDocumentSnapshotWithDataObject = {
  user: DocumentSnapshotWithDataObject
  menuItem: DocumentSnapshotWithDataObject
}

type OrderItemDocumentSnapshotWithDataObjectList =
  Array<OrderItemDocumentSnapshotWithDataObject>

export const getOrderItemsFromOrderDoc = async (
  orderDoc: DocumentDataSnapshot | undefined
): Promise<OrderItemDocumentSnapshotWithDataObjectList> => {
  try {
    if (!orderDoc) {
      throw new Error('orderDoc not found')
    }

    const orderItemDocs =
      await getFireStoreCollectionPromise({
        documentReference: orderDoc.ref,
        path: 'items',
      })

    const orderItems = await orderItemDocs.reduce(
      async (resultPromise, orderItemDoc) => {
        const result = await resultPromise

        try {
          const userDoc =
            await getOrderItemUserDocFromOrderItemDoc(
              orderItemDoc
            )
          const user = getDocumentData(userDoc)

          if (!user) {
            throw new Error('user not found')
          }

          const menuItemDoc =
            await getMenuItemDocFromOrderItemDoc(
              orderItemDoc
            )
          const menuItem =
            getDocumentData(menuItemDoc)

          if (!menuItem) {
            throw new Error('menuItem not found')
          }

          if (menuItem.hidden !== false) {
            throw new Error('menuItem is hidden')
          }

          return [
            ...result,
            {
              user: {
                doc: userDoc,
                data: user,
              },
              menuItem: {
                doc: menuItemDoc,
                data: menuItem,
              },
            },
          ]
        } catch {}

        return result
      },
      Promise.resolve(
        Array<OrderItemDocumentSnapshotWithDataObject>()
      )
    )

    return orderItems
  } catch {
    throw new Error(
      'getOrderItemsFromOrderDoc fail'
    )
  }
}

export const getMenuItemListFromRestaurantDoc =
  async (
    restaurantDoc:
      | DocumentDataSnapshot
      | undefined
  ): Promise<DocumentSnapshotWithDataObjectList> => {
    try {
      if (!restaurantDoc) {
        throw new Error('restaurantDoc not found')
      }

      const menuItemsDocs =
        await await getFireStoreCollectionPromise(
          {
            documentReference: restaurantDoc.ref,
            path: 'menuItems',
          }
        )

      const menuItems = menuItemsDocs.reduce(
        (result, menuItemDoc) => {
          const data =
            getDocumentData(menuItemDoc)

          if (!data) {
            return result
          }

          if (data.hidden !== false) {
            return result
          }

          return [
            ...result,
            {
              doc: menuItemDoc,
              data,
            },
          ]
        },
        Array<DocumentSnapshotWithDataObject>()
      )

      return menuItems
    } catch {
      throw new Error(
        'getMenuItemListFromRestaurantDoc fail'
      )
    }
  }
