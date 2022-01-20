import React from 'react'
import MenuManagerView from '@components/MenuManagerView'

import FirebaseAuthControlView from '@containers/FirebaseAuthControlView'

const MenuTest: React.FC = () => {
  return (
    <FirebaseAuthControlView
      authorizedView={<MenuManagerView />}
    />
  )
}

export default MenuTest
