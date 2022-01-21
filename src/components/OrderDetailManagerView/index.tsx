import React from 'react'
import { useRouter } from 'next/router'

import useOrderItemFirestore from '@firebase-folder/hooks/useOrderItemFirestore'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

// import type { OrderItemItem } from '@other-support/Types'

import type { OrderItemItem } from '@firebase-folder/types'

const OrderDetailManagerView: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { isFirst, order, orderItemItems } =
    useOrderItemFirestore({
      orderId:
        forceStringForNextRouterQueryFirst(id),
    })

  if (isFirst) {
    return (
      <div className="text-white">
        wait first load.
      </div>
    )
  }

  if (!order) {
    return (
      <div className="text-white">
        Order not found.
      </div>
    )
  }

  const orderItemItemsObject =
    orderItemItems.reduce((obj, item) => {
      const itemUserName = item['user-name']
      if (!itemUserName) {
        return obj
      }

      if (!obj[itemUserName]) {
        obj[itemUserName] = [item]
        return obj
      }

      obj[itemUserName].push(item)
      return obj
    }, {} as { [k: string]: OrderItemItem[] })

  const orderStateString = () => {
    const defaultString = `order isFinish: ${order.finished}\nrestaurantName: ${order['restaurant-name']}`

    if (order.finished) {
      return defaultString
    }

    return `${defaultString}\nstorage-path: ${order['storage-path']}`
  }

  return (
    <div className="text-white">
      <div>OrderDetail id: {id}</div>

      <div className="break-all whitespace-pre-wrap py-4">
        {orderStateString()}
      </div>

      {Object.entries(orderItemItemsObject).map(
        ([userName, orderItemItem], index) => (
          <div
            className="py-4 text-white break-all whitespace-pre-wrap"
            key={`orderItemItem-${index}`}
          >
            <div>userName: {userName}</div>
            {orderItemItem.map(
              (eachOrderItemItem, i) => (
                <div
                  key={`orderItemItem-${index}-${i}`}
                  className="pl-8"
                >
                  {`each orderItemItem cost: ${eachOrderItemItem.cost} itemName: ${eachOrderItemItem['item-name']}`}
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  )
}

export default OrderDetailManagerView
