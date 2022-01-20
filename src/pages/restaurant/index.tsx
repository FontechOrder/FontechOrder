import React from 'react'
import RestaurantManagerView from '@components/RestaurantManagerView'

import FirebaseAuthControlView from '@containers/FirebaseAuthControlView'

const RestaurantTest: React.FC = () => {
  return (
    <FirebaseAuthControlView
      authorizedView={<RestaurantManagerView />}
    />
  )
}

export default RestaurantTest
