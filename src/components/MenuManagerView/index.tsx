import React from 'react'

import RandomMenu from '@components/RandomMenu'
import OrderList from '@components/OrderList'

const MenuManagerView: React.FC = () => {
  return (
    <div>
      <RandomMenu />
      <OrderList />
    </div>
  )
}

export default MenuManagerView
