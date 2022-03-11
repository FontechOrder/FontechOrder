import React from 'react'
import PageContentDefault from '@containers/PageContent/default'
import RestaurantList from '@components/RestaurantList'

import NewRestaruantsLink from '@components/NewRestaruantsLink'

const Restaurant = () => {
  return (
    <PageContentDefault>
      <div className="bg-yellow-800">
        <NewRestaruantsLink />
        <RestaurantList />
      </div>
    </PageContentDefault>
  )
}

export default Restaurant
