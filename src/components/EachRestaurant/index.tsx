import React from 'react'

import useRouterQueryId from '@other-support/Hooks/useRouterQueryId'

import EachRestaurantContent from '@components/EachRestaurant/Content'

const EachRestaurant = () => {
  const { isInit, id } = useRouterQueryId()

  if (isInit) {
    return <div>Init...</div>
  }

  if (!id) {
    return <div>Invalid Id</div>
  }

  return <EachRestaurantContent id={id} />
}

export default EachRestaurant
