import {
  collection,
  query,
  orderBy,
  startAfter,
  endBefore,
  limit,
  getDocs,
} from 'firebase/firestore'

import type {
  DocumentDataSnapshot,
  DocumentDataSnapshotArray,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const getFireStoreCollectionDocsWithPaginatePromise =
  async ({
    path,
    pathSegments = [],
    orderByKey = 'name',
    limitNumber = 10,
    firstVisible = undefined,
    lastVisible = undefined,
  }: {
    path: string
    pathSegments?: string[]
    orderByKey?: string
    limitNumber?: number
    firstVisible?: DocumentDataSnapshot
    lastVisible?: DocumentDataSnapshot
  }): Promise<DocumentDataSnapshotArray> => {
    const defaultQueryConstraints = [
      orderBy(orderByKey),
      limit(limitNumber),
    ]

    const getQueryConstraints = () => {
      if (lastVisible)
        return [
          ...defaultQueryConstraints,
          startAfter(lastVisible),
        ]

      if (firstVisible)
        return [
          ...defaultQueryConstraints,
          endBefore(firstVisible),
        ]

      return defaultQueryConstraints
    }

    const queryConstraints = getQueryConstraints()

    const q = query(
      collection(
        firebaseFirestore,
        path,
        ...pathSegments
      ),
      ...queryConstraints
    )

    const querySnapshot = await getDocs(q)

    if (querySnapshot.docs.length === 0) {
      throw new Error('querySnapshot no data.')
    }

    return querySnapshot.docs
  }

export default getFireStoreCollectionDocsWithPaginatePromise
