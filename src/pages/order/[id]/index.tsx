import React from 'react'
import { useRouter } from 'next/router'

import useOrderItemFirestore from '@firebase-folder/hooks/useOrderItemFirestore'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

// import type { OrderItemItem } from '@other-support/Types'

import type { OrderItemItem } from '@firebase-folder/types'

const OrderDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { order, orderItemItems } =
    useOrderItemFirestore({
      orderId:
        forceStringForNextRouterQueryFirst(id),
    })

  // React.useEffect(() => {
  //   console.log('order: ', order)
  // }, [order])

  // React.useEffect(() => {
  //   console.log('menus: ', menus)
  // }, [menus])

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

  return (
    <div className="text-white">
      <div>OrderDetail id: {id}</div>

      <div className="break-all whitespace-pre-wrap py-4">
        {`order isFinish: ${order.finished}\nrestaurantName: ${order['restaurant-name']}\nstorage-path: ${order['storage-path']}`}
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

export default OrderDetail
