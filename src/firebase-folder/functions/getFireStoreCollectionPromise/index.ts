import {
  collection,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore'

import type {
  DocumentDataReference,
  DocumentDataSnapshotArray,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const getFireStoreCollectionPromise = async ({
  documentReference,
  path,
  pathSegments = [],
  orderByKey,
}: {
  documentReference?: DocumentDataReference
  path: string
  pathSegments?: string[]
  orderByKey?: string
}): Promise<DocumentDataSnapshotArray> => {
  const customCollectionReference =
    (documentReference &&
      collection(
        documentReference,
        path,
        ...pathSegments
      )) ||
    collection(
      firebaseFirestore,
      path,
      ...pathSegments
    )

  const customGetDocsCollectionReference =
    orderByKey
      ? query(
          customCollectionReference,
          ...[orderBy(orderByKey)]
        )
      : customCollectionReference

  const querySnapshot = await getDocs(
    customGetDocsCollectionReference
  )

  if (querySnapshot.docs.length === 0) {
    throw new Error('querySnapshot no data.')
  }

  return querySnapshot.docs
}

export default getFireStoreCollectionPromise
