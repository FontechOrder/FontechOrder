import React from 'react'
import PageContentDefault from '@containers/PageContent/default'
import RestaurantList from '@components/RestaurantList'

const Restaurant = () => {
  return (
    <PageContentDefault>
      <div className="bg-yellow-800">
        <RestaurantList />
      </div>
    </PageContentDefault>
  )
}

export default Restaurant
