import {
  doc,
  deleteDoc,
  addDoc,
  collection,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

import type { NoIdOrderItem } from '@firebase-folder/types'

import useOrdersListFirestore from '@firebase-folder/hooks/useOrdersListFirestore'

const useOrdersFirestore = () => {
  const deleteOrderWithId = async ({
    id,
  }: {
    id: string
  }): Promise<boolean> => {
    try {
      await deleteDoc(
        doc(firebaseFirestore, 'orders', id)
      )
    } catch {
      return false
    }

    return true
  }

  const newOrder = async (
    orderItem: NoIdOrderItem
  ): Promise<boolean> => {
    try {
      await addDoc(
        collection(firebaseFirestore, 'orders'),
        orderItem
      )
    } catch {
      return false
    }

    return true
  }

  return {
    ...useOrdersListFirestore(),
    newOrder,
    deleteOrderWithId,
  }
}

export default useOrdersFirestore
