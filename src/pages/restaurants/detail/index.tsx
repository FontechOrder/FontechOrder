import React from 'react'

import PageContentWithId from '@containers/PageContent/withId'
import EachRestaurant from '@components/EachRestaurant'

const RestaurantDetail = () => {
  return (
    <PageContentWithId>
      {id => <EachRestaurant id={id} />}
    </PageContentWithId>
  )
}

export default RestaurantDetail
