import React from 'react'
import { useRouter } from 'next/router'

import useRestaurantItemFirestore from '@firebase-folder/hooks/useRestaurantItemFirestore'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

const RestaurantDetailManagerView: React.FC =
  () => {
    const router = useRouter()
    const { id } = router.query

    const { isFirst, restaurant, menus } =
      useRestaurantItemFirestore({
        restaurantId:
          forceStringForNextRouterQueryFirst(id),
      })

    if (isFirst) {
      return (
        <div className="text-white">
          wait first load.
        </div>
      )
    }

    if (!restaurant) {
      return (
        <div className="text-white">
          Restaurant not found.
        </div>
      )
    }

    return (
      <div className="text-white">
        <div>RestaurantDetail id: {id}</div>

        <div className="break-all whitespace-pre-wrap py-4">
          {`restaurant name: ${restaurant.name}\nslack-image: ${restaurant['slack-image']}\nstorage-path: ${restaurant['storage-path']}`}
        </div>

        {menus.map(menu => (
          <div
            className="break-all whitespace-pre-wrap"
            key={`menu-${menu.id}`}
          >
            {`menu id: ${menu.id}, name: ${menu.name}, cost: ${menu.cost}, type: ${menu.type}\n`}
          </div>
        ))}
      </div>
    )
  }

export default RestaurantDetailManagerView
