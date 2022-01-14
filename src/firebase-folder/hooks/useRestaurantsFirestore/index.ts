import React from 'react'

import {
  doc,
  collection,
  onSnapshot,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

import type { StringKeyObject } from '@other-support/Types'

const useRestaurantsFirestore = () => {
  const [list, setList] = React.useState(
    Array<StringKeyObject>()
  )

  React.useEffect(() => {
    const restaurantsDataRef = doc(
      firebaseFirestore,
      'fontech-order',
      'restaurants'
    )
    const unsubscribe = onSnapshot(
      collection(restaurantsDataRef, 'list'),
      snapshot => {
        const dataList = snapshot.docs.map(doc =>
          doc.data()
        )

        setList(dataList)
      },
      error => {
        console.log(
          'useRestaurantsFirestore error: ',
          error.message
        )
      }
    )

    return () => {
      unsubscribe()
    }
  }, [])

  return {
    list,
  }
}

export default useRestaurantsFirestore
