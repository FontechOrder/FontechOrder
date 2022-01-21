import React from 'react'

import {
  doc,
  updateDoc,
  setDoc,
  collection,
  onSnapshot,
  query,
  where,
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

  const hiddenRestaurantWithId = async ({
    id,
  }: {
    id: string
  }): Promise<boolean> => {
    try {
      await updateDoc(
        doc(firebaseFirestore, 'restaurants', id),
        {
          hidden: true,
        }
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
      await setDoc(
        doc(
          firebaseFirestore,
          'restaurants',
          restaurantItem.name
        ),
        restaurantItem,
        { merge: true }
      )
    } catch {
      return false
    }

    return true
  }

  React.useEffect(() => {
    const restaurantsRef = collection(
      firebaseFirestore,
      'restaurants'
    )
    const q = query(
      restaurantsRef,
      where('hidden', '==', false)
    )

    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        const dataList = snapshot.docs
          .map(doc => {
            const data = doc.data()

            return {
              id: doc.id,
              hidden: data.hidden,
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
    hiddenRestaurantWithId,
  }
}

export default useRestaurantsFirestore
