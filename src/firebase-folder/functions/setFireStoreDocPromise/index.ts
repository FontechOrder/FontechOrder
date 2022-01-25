import { doc, setDoc } from 'firebase/firestore'

import type {
  DocumentData,
  DocumentDataReference,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const setFireStoreDocPromise = async ({
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

  await setDoc(customDocumentReference, data)
}

export default setFireStoreDocPromise
