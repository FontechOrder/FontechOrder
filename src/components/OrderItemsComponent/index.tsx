import React from 'react'

import type { DocumentDataSnapshotArray } from '@firebase-folder/types'

import OrderItem from '@components/OrderItem'

interface OrderItemsComponentProps {
  orderItemDocs: DocumentDataSnapshotArray
}

const OrderItemsComponent = ({
  orderItemDocs,
}: OrderItemsComponentProps) => {
  return (
    <div className="py-4">
      {orderItemDocs.map(
        (orderItemDoc, index) => (
          <div key={'order-item-' + index}>
            <OrderItem
              orderItemDoc={orderItemDoc}
            />
          </div>
        )
      )}
    </div>
  )
}

export default OrderItemsComponent
