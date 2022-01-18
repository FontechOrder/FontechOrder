import React from 'react'

import RestaurantList from '@components/RestaurantList'
import NewRestaurantForm from '@components/NewRestaurantForm'

const RestaurantManagerView: React.FC = () => {
  return (
    <div>
      <RestaurantList />
      <NewRestaurantForm />
    </div>
  )
}

export default RestaurantManagerView
