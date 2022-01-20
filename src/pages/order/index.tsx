import React from 'react'
import OrderManagerView from '@components/OrderManagerView'

import FirebaseAuthControlView from '@containers/FirebaseAuthControlView'

const MenuTest: React.FC = () => {
  return (
    <FirebaseAuthControlView
      authorizedView={<OrderManagerView />}
    />
  )
}

export default MenuTest
