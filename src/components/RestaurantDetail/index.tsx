import React from 'react'

import useFireStoreDoc from '@firebase-folder/hooks/useFireStoreDoc'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

import RestaurantMenuList from '@components/RestaurantMenuList'
import ZoomImageWithSize from '@components/ZoomImageWithSize'
import NewRestaurantMenuItemForm from '@components/NewRestaurantMenuItemForm'

const RestaurantDetail = ({
  id,
}: {
  id: string | string[] | undefined
}) => {
  const memoizedPathSegments =
    React.useMemo(() => {
      return [
        forceStringForNextRouterQueryFirst(id),
      ]
    }, [id])

  const {
    isInit,
    isLoading,
    getDocument: getRestaurantDoc,
    document: restaurantDoc,
    data: restaurant,
  } = useFireStoreDoc({
    path: 'restaurants',
    pathSegments: memoizedPathSegments,
  })

  if (isInit || isLoading) {
    return <div>restaurant list loading...</div>
  }

  if (!restaurantDoc || !restaurant) {
    return <div>restaurant not found</div>
  }

  const restaurantImageUrl =
    restaurant['image-url']

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:mr-8">
          <div className="flex flex-row text-white">
            {restaurantDoc.id}
            {restaurant.hidden ? 'X' : 'Y'}
          </div>

          <div className="h-[210px] w-[150px]">
            {restaurantImageUrl && (
              <ZoomImageWithSize
                objectFit="contain"
                src={restaurantImageUrl}
                alt="restaurant-image"
                width={500}
                height={700}
              />
            )}
          </div>
        </div>
        <NewRestaurantMenuItemForm
          className="flex-1"
          restaurantDoc={restaurantDoc}
          resultSuccessCallback={getRestaurantDoc}
        />
      </div>
      <RestaurantMenuList
        restaurantDoc={restaurantDoc}
      />
    </div>
  )
}

export default RestaurantDetail
