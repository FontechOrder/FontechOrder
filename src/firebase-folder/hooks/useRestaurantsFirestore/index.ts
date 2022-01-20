import React from 'react'

import {
  doc,
  deleteDoc,
  addDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

import type {
  RestaurantItem,
  NoIdRestaurantItem,
} from '@other-support/Types'

const useRestaurantsFirestore = () => {
  const [list, setList] = React.useState(
    Array<RestaurantItem>()
  )

  const deleteRestaurantWithId = async ({
    id,
  }: {
    id: string
  }): Promise<boolean> => {
    try {
      await deleteDoc(
        doc(firebaseFirestore, 'restaurants', id)
      )
    } catch {
      return false
    }

    return true
  }

  const newRestaurant = async (
    restaurantItem: NoIdRestaurantItem
  ): Promise<boolean> => {
    try {
      await addDoc(
        collection(
          firebaseFirestore,
          'restaurants'
        ),
        restaurantItem
      )
    } catch {
      return false
    }

    return true
  }

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(
        firebaseFirestore,
        'restaurants'
      ),
      snapshot => {
        const dataList = snapshot.docs
          .map(doc => {
            const data = doc.data()

            return {
              id: doc.id,
              name: data.name,
              'slack-image': data['slack-image'],
              'storage-path':
                data['storage-path'],
            }
          })
          .filter(each => each.name)

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
    newRestaurant,
    deleteRestaurantWithId,
  }
}

export default useRestaurantsFirestore
