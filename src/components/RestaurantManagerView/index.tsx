import React from 'react'

import RestaurantList from '@components/RestaurantList'
import NewRestaurantForm from '@components/NewRestaurantForm'

// temp
import NewRestautantFormDataButton from '@components/NewRestautantFormDataButton'

const RestaurantManagerView: React.FC = () => {
  return (
    <div>
      <RestaurantList />
      <NewRestaurantForm />
      <NewRestautantFormDataButton />
    </div>
  )
}

export default RestaurantManagerView
