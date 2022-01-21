import React from 'react'

import FirebaseAuthControlView from '@containers/FirebaseAuthControlView'

import RestaurantDetailManagerView from '@components/RestaurantDetailManagerView'

const RestaurantDetail: React.FC = () => {
  return (
    <FirebaseAuthControlView
      authorizedView={
        <RestaurantDetailManagerView />
      }
    />
  )
}

export default RestaurantDetail
