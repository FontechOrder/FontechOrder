import React from 'react'
import { useRouter } from 'next/router'

import useRestaurantItemFirestore from '@firebase-folder/hooks/useRestaurantItemFirestore'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

const RestaurantDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { restaurant, menus } =
    useRestaurantItemFirestore({
      restaurantId:
        forceStringForNextRouterQueryFirst(id),
    })

  // React.useEffect(() => {
  //   console.log('restaurant: ', restaurant)
  // }, [restaurant])

  // React.useEffect(() => {
  //   console.log('menus: ', menus)
  // }, [menus])

  return (
    <div className="text-white">
      <div>RestaurantDetail id: {id}</div>
      {restaurant && (
        <div className="break-all whitespace-pre-wrap py-4">
          {`restaurant name: ${restaurant.name}\nslack-image: ${restaurant['slack-image']}\nstorage-path: ${restaurant['storage-path']}`}
        </div>
      )}
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

export default RestaurantDetail
