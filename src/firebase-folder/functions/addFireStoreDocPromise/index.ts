import {
  collection,
  addDoc,
} from 'firebase/firestore'

import type {
  DocumentData,
  DocumentDataReference,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const addFireStoreDocPromise = async ({
  documentReference,
  path,
  pathSegments = [],
  data,
}: {
  documentReference?: DocumentDataReference
  path: string
  pathSegments?: string[]
  data: DocumentData
}): Promise<void> => {
  const customDocumentReference =
    documentReference
      ? collection(
          documentReference,
          path,
          ...pathSegments
        )
      : collection(
          firebaseFirestore,
          path,
          ...pathSegments
        )

  await addDoc(customDocumentReference, data)
}

export default addFireStoreDocPromise
