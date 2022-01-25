import type {
  DocumentDataSnapshot,
  DocumentDataReference,
} from '@firebase-folder/types'
import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

import { getDocumentData } from '@other-support/Consts'

const getEachOrderItemDocRequest = async (
  eachOrderItemDoc: DocumentDataSnapshot
): Promise<{
  userDoc: DocumentDataSnapshot
  menuItemDoc: DocumentDataSnapshot
}> => {
  const userReferencePath: string = (
    getDocumentData(eachOrderItemDoc)?.[
      'user-reference'
    ] as DocumentDataReference
  )?.path

  if (!userReferencePath) {
    throw new Error(
      'user-reference path not found'
    )
  }

  const menuItemReferencePath: string = (
    getDocumentData(eachOrderItemDoc)?.[
      'menu-item-reference'
    ] as DocumentDataReference
  )?.path

  if (!menuItemReferencePath) {
    throw new Error(
      'menu-item-reference path not found'
    )
  }

  const userDoc = await getFireStoreDocPromise({
    path: userReferencePath,
  })

  const menuItemDoc =
    await getFireStoreDocPromise({
      path: menuItemReferencePath,
    })

  return {
    userDoc,
    menuItemDoc,
  }
}
export default getEachOrderItemDocRequest
