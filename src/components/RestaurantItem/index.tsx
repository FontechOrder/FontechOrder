import React from 'react'
import classnames from 'classnames'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import CustomButton from '@components/CustomButton'

import MenuImageRectangleView from '@components/MenuImageRectangleView'

import { restaurantConventToStorageImageType } from '@other-support/Consts'

interface RestaurantItemProps {
  restaurantDoc: DocumentDataSnapshot
}

const RestaurantItem = ({
  restaurantDoc,
}: RestaurantItemProps) => {
  const restaurant = restaurantDoc.data()

  // console.log('RestaurantItem restaurant: ', restaurant)
  // const restaurantImageUrl =
  //   restaurant?.['image-url']

  // const restaurantShown = !restaurant?.hidden
  // const restaurantHidden = !restaurantShown

  return (
    <div
      className={classnames(
        restaurant?.hidden &&
          'bg-white text-black'
      )}
    >
      <MenuImageRectangleView
        storageImage={restaurantConventToStorageImageType(
          restaurant
        )}
      >
        <div className="px-2">
          name: {restaurant?.name}
        </div>
        <CustomButton
          onClick={() => {
            window.open(
              '/restaurant/' + restaurantDoc.id,
              '_self'
            )
          }}
        >
          Detail
        </CustomButton>
      </MenuImageRectangleView>
    </div>
  )
}

export default RestaurantItem
