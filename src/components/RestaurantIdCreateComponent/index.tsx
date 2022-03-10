import React from 'react'
import RestaurantIdCreateComponentForm from '@components/RestaurantIdCreateComponent/Form'

import useFireStoreDoc from '@firebase-folder/hooks/useFireStoreDoc'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

const RestaurantIdCreateComponent = ({
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
    document: restaurantDoc,
  } = useFireStoreDoc({
    path: 'restaurants',
    pathSegments: memoizedPathSegments,
  })

  if (isInit || isLoading) {
    return <div>restaurant list loading...</div>
  }

  if (!restaurantDoc) {
    return <div>restaurant not found</div>
  }

  return (
    <RestaurantIdCreateComponentForm
      restaurantDoc={restaurantDoc}
    />
  )
}
export default RestaurantIdCreateComponent
