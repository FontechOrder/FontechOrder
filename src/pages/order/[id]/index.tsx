import React from 'react'

import FirebaseAuthControlView from '@containers/FirebaseAuthControlView'

import OrderDetailManagerView from '@components/OrderDetailManagerView'

const RestaurantDetail: React.FC = () => {
  return (
    <FirebaseAuthControlView
      authorizedView={<OrderDetailManagerView />}
    />
  )
}

export default RestaurantDetail
