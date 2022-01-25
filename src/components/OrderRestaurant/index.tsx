import React from 'react'

import type { DocumentData } from '@firebase-folder/types'

import MenuImageRectangleView from '@components/MenuImageRectangleView'

import { restaurantConventToStorageImageType } from '@other-support/Consts'

interface OrderRestaurantProps {
  restaurant: DocumentData
}

const OrderRestaurant = ({
  restaurant,
}: OrderRestaurantProps) => {
  // const restaurantImageUrl =
  //   restaurant['image-url']

  return (
    <div className="py-4 text-white">
      <div>
        <div>{restaurant.name}</div>
        <MenuImageRectangleView
          storageImage={restaurantConventToStorageImageType(
            restaurant
          )}
        />
      </div>
    </div>
  )
}

export default OrderRestaurant
