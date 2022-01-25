import React from 'react'

import {
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore'

import type {
  DocumentData,
  DocumentDataSnapshot,
  QueryConstraintArray,
} from '@firebase-folder/types'

import { firebaseFirestore } from '@firebase-folder/configure'

const useFireStoreCollectionSubscribe = ({
  getDocumentData = undefined,
  path,
  pathSegments = [],
  queryConstraints = [],
}: {
  getDocumentData?: DocumentData
  path: string
  pathSegments?: string[]
  queryConstraints?: QueryConstraintArray
}) => {
  const [isInit, setIsInit] = React.useState(true)

  const [documentDatas, setDocumentDatas] =
    React.useState(Array<DocumentDataSnapshot>())

  React.useEffect(() => {
    const customCollection =
      (getDocumentData &&
        collection(
          getDocumentData.ref,
          path,
          ...pathSegments
        )) ||
      collection(
        firebaseFirestore,
        path,
        ...pathSegments
      )

    if (!customCollection) {
      setIsInit(false)
      return
    }

    const queryCustomCollection =
      queryConstraints.length > 0
        ? query(
            customCollection,
            ...queryConstraints
          )
        : customCollection

    if (!queryCustomCollection) {
      setIsInit(false)
      return
    }

    const unsubscribe = onSnapshot(
      queryCustomCollection,
      snapshot => {
        const filteredDocs = snapshot.docs.filter(
          doc => doc.data()
        )

        setDocumentDatas(filteredDocs)
        setIsInit(false)
      }
    )

    return () => {
      unsubscribe()
    }
  }, [
    getDocumentData,
    path,
    pathSegments,
    queryConstraints,
  ])

  return {
    isInit,
    documentDatas,
  }
}

export default useFireStoreCollectionSubscribe
