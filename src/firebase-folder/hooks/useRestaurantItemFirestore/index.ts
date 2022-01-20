import React from 'react'

import {
  doc,
  deleteDoc,
  collection,
  onSnapshot,
  getDocs,
} from 'firebase/firestore'

import { firebaseFirestore } from '@firebase-folder/configure'

import type {
  RestaurantItem,
  MenuItem,
} from '@other-support/Types'

const useRestaurantItemFirestore = ({
  restaurantId,
}: {
  restaurantId?: string
}) => {
  const [restaurant, setRestaurant] =
    React.useState<RestaurantItem | undefined>(
      undefined
    )
  const [menus, setMenus] = React.useState(
    Array<MenuItem>()
  )

  const deleteRestaurant =
    async (): Promise<boolean> => {
      try {
        if (!restaurantId) {
          throw new Error('Invalid restaurant ID')
        }

        await deleteDoc(
          doc(
            firebaseFirestore,
            'restaurants',
            restaurantId
          )
        )
      } catch {
        return false
      }

      return true
    }

  React.useEffect(() => {
    if (!restaurantId) {
      return
    }

    const restaurantDoc = doc(
      firebaseFirestore,
      'restaurants',
      restaurantId
    )

    const unsub = onSnapshot(
      restaurantDoc,
      async doc => {
        const docData = doc.data()

        if (!docData) {
          return
        }

        setRestaurant({
          id: doc.id,
          name: docData.name,
          'slack-image': docData['slack-image'],
          'storage-path': docData['storage-path'],
        })

        const menusSnapshot = await getDocs(
          collection(restaurantDoc, 'menus')
        )

        const firestoreMenus = menusSnapshot.docs
          .map<MenuItem | undefined>(menuDoc => {
            const menuData = menuDoc.data()
            if (!menuData) {
              return undefined
            }

            return {
              id: menuDoc.id,
              name: menuData.name,
              cost: menuData.cost,
              type: menuData.type,
            } as MenuItem
          })
          .filter((item): item is MenuItem => {
            return !!item
          })

        setMenus(firestoreMenus)
      }
    )

    return () => {
      unsub()
    }
  }, [restaurantId])

  return {
    restaurant,
    menus,
    deleteRestaurant,
  }
}

export default useRestaurantItemFirestore
