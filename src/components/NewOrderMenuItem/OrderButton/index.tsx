import React from 'react'

import { LoadingButton } from '@mui/lab'

import type { EmptyCallback } from '@other-support/types'

import type {
  DatabaseUserInterface,
  OrderItemInterface,
  NoIdDatabaseOrderItemType,
} from '@supabase-folder/types'

import createOrderItems from '@supabase-folder/functions/createOrderItems'

interface OrderButtonProps {
  user: DatabaseUserInterface
  doClear: EmptyCallback
  newOrderItemList: Array<OrderItemInterface>
  orderId: number
  restaurantId: number
}

const OrderButton: React.FC<OrderButtonProps> = ({
  user,
  doClear,
  newOrderItemList,
  orderId,
  restaurantId,
}) => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const doOrderButtonTitle = React.useMemo(() => {
    const totalCost = newOrderItemList.reduce(
      (acc, item) => {
        return (
          acc + item.option.cost * item.quantity
        )
      },
      0
    )

    return `DO ORDER WITH ${totalCost}`
  }, [newOrderItemList])

  return (
    <LoadingButton
      disabled={newOrderItemList.length === 0}
      loading={isLoading}
      onClick={() => {
        const asyncCreateOrderItems =
          async () => {
            if (isLoading) {
              return
            }
            setIsLoading(true)
            try {
              // console.log(
              //   'newOrderItemList: ',
              //   newOrderItemList
              // )

              // console.log('orderId: ', orderId)

              // console.log('user: ', user)

              const newOrders =
                newOrderItemList.map<NoIdDatabaseOrderItemType>(
                  orderItem => ({
                    note: orderItem.note,
                    quantity: orderItem.quantity,
                    cost: orderItem.option.cost,
                    item_name:
                      orderItem.option.name,
                    item_type:
                      orderItem.option.type,

                    user_id: user.id,
                    order_id: orderId,
                    restaurant_id: restaurantId,
                  })
                )

              // console.log(
              //   'newOrders: ',
              //   newOrders
              // )

              await createOrderItems(newOrders)

              doClear()
            } catch {
              console.log(
                'asyncCreateOrderItems error'
              )
            }
            setIsLoading(false)
          }
        asyncCreateOrderItems()
      }}
    >
      {doOrderButtonTitle}
    </LoadingButton>
  )
}

export default OrderButton
