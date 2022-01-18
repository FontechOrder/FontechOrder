import React from 'react'

import RestaurantList from '@components/RestaurantList'
// import CustomButton from '@components/CustomButton'
import NewRestaurantForm from '@components/NewRestaurantForm'

const CreateOrder: React.FC = () => {
  return (
    <div>
      <RestaurantList />
      <NewRestaurantForm />
    </div>
  )
}

export default CreateOrder
