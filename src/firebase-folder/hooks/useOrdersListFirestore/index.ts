import React from 'react'

import {
  collection,
  onSnapshot,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

// import type { OrderItem } from '@other-support/Types'
import type { OrderItem } from '@firebase-folder/types'

const useOrdersListFirestore = () => {
  const [list, setList] = React.useState(
    Array<OrderItem>()
  )

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firebaseFirestore, 'orders'),
      snapshot => {
        const dataList = snapshot.docs
          .map(doc => {
            const data = doc.data()

            return {
              id: doc.id,
              finished: data.finished,
              'restaurant-name':
                data['restaurant-name'],
              'storage-path':
                data['storage-path'],
            }
          })
          .filter(each => each.id)

        setList(dataList)
      },
      error => {
        console.log(
          'useOrdersFirestore error: ',
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

export default useOrdersListFirestore
