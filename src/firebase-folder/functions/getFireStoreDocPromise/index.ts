import { doc, getDoc } from 'firebase/firestore'

import type {
  DocumentDataSnapshot,
  DocumentDataReference,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const getFireStoreDocPromise = async ({
  documentReference,
  path,
  pathSegments = [],
}: {
  documentReference?: DocumentDataReference
  path: string
  pathSegments?: string[]
}): Promise<DocumentDataSnapshot> => {
  const customDocumentReference =
    documentReference
      ? doc(
          documentReference,
          path,
          ...pathSegments
        )
      : doc(
          firebaseFirestore,
          path,
          ...pathSegments
        )

  const document = await getDoc(
    customDocumentReference
  )

  if (!document.exists()) {
    throw new Error('document not found.')
  }

  return document
}

export default getFireStoreDocPromise
