import React from 'react'
import classnames from 'classnames'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import CustomLink from '@components/CustomLink'

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
        <CustomLink
          className="focus:!shadow-outline disabled:!text-slate-40 rounded bg-blue-500 !py-2 !px-4 font-bold !text-white hover:bg-blue-700 focus:!outline-none disabled:bg-slate-500"
          title="Detail"
          path={'/restaurant/' + restaurantDoc.id}
        />
      </MenuImageRectangleView>
    </div>
  )
}

export default RestaurantItem
