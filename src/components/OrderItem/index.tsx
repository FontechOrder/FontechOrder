import React from 'react'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import useOrderItemDoc from '@other-support/Hooks/useOrderItemDoc'

interface OrderItemProps {
  orderItemDoc: DocumentDataSnapshot
}

const OrderItem = ({
  orderItemDoc,
}: OrderItemProps) => {
  const { user, menuItem } =
    useOrderItemDoc(orderItemDoc)

  if (!user) {
    return <div>user not found</div>
  }

  if (!menuItem) {
    return <div>menuItem not found</div>
  }

  return (
    <div className="py-4 pl-2">
      <div className="py-2">
        <div>user name: {user.name}</div>
      </div>

      <div className="py-2">
        <div>menu item name: {menuItem.name}</div>
        <div>menu item cost: {menuItem.cost}</div>
        <div>
          menu item hidden:
          {JSON.stringify(menuItem.hidden)}
        </div>
      </div>
    </div>
  )
}

export default OrderItem
