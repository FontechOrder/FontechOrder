import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentDataSnapshotReference,
} from '@firebase-folder/types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

import { getDocumentData } from '@other-support/Consts'

const useOrderItemDoc = (
  orderItemDoc: DocumentDataSnapshot
) => {
  const [userDoc, setUserDoc] = React.useState<
    DocumentDataSnapshot | undefined
  >(undefined)
  const [menuItemDoc, setMenuItemDoc] =
    React.useState<
      DocumentDataSnapshot | undefined
    >(undefined)

  const orderItem = React.useMemo(() => {
    return getDocumentData(orderItemDoc)
  }, [orderItemDoc])

  const user = React.useMemo(() => {
    return getDocumentData(userDoc)
  }, [userDoc])

  const menuItem = React.useMemo(() => {
    return getDocumentData(menuItemDoc)
  }, [menuItemDoc])

  const getUserDocs = React.useCallback(() => {
    const asyncGetUserDoc = async () => {
      try {
        if (!orderItem) {
          throw new Error(
            'no order Item doc data'
          )
        }

        const userReference: DocumentDataSnapshotReference =
          orderItem['user-reference']

        if (!userReference) {
          throw new Error(
            'no order Item doc data'
          )
        }

        const getUserDoc =
          await getFireStoreDocPromise({
            path: userReference.path,
          })

        setUserDoc(getUserDoc)
      } catch {}
    }

    asyncGetUserDoc()
  }, [orderItem])

  const getMenuItemDocs =
    React.useCallback(() => {
      const asyncGetMenuItemDocs = async () => {
        try {
          if (!orderItem) {
            throw new Error(
              'no order Item doc data'
            )
          }

          const menuItemReference: DocumentDataSnapshotReference =
            orderItem['menu-item-reference']

          if (!menuItemReference) {
            throw new Error(
              'no order Item doc data'
            )
          }

          const getMenuItemDoc =
            await getFireStoreDocPromise({
              path: menuItemReference.path,
            })

          setMenuItemDoc(getMenuItemDoc)
        } catch {}
      }

      asyncGetMenuItemDocs()
    }, [orderItem])

  React.useEffect(() => {
    getUserDocs()
  }, [getUserDocs])

  React.useEffect(() => {
    getMenuItemDocs()
  }, [getMenuItemDocs])

  return {
    userDoc,
    user,
    menuItemDoc,
    menuItem,
  }
}

export default useOrderItemDoc
