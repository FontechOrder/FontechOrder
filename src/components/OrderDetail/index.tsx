import React from 'react'
import useOrderDetail from '@other-support/Hooks/useOrderDetail'

import {
  forceStringForNextRouterQueryFirst,
  sortByTwoString,
} from '@other-support/Consts'

import OrderRestaurant from '@components/OrderRestaurant'
import NewMenuItemToOrderForm from '@components/NewMenuItemToOrderForm'

const OrderDetail = ({
  id,
}: {
  id: string | string[] | undefined
}) => {
  const memoizedPathSegments =
    React.useMemo(() => {
      return [
        forceStringForNextRouterQueryFirst(id),
      ]
    }, [id])

  const {
    isInit,
    isLoading,
    orderDoc,
    order,

    restaurant,
    menuItems,

    updateOrderItems,
    orderItems,
    orderItemsIsLoading,
  } = useOrderDetail({
    pathSegments: memoizedPathSegments,
  })

  React.useEffect(() => {
    console.log('OrderDetail order: ', order)
  }, [order])

  const canShow = React.useMemo(() => {
    return order?.finished === false
  }, [order])

  const updateOrderItemsWithOrderDoc =
    React.useCallback(() => {
      if (!orderDoc) {
        return
      }

      updateOrderItems(orderDoc)
    }, [orderDoc, updateOrderItems])

  if (isInit || isLoading) {
    return <div>order list loading...</div>
  }

  if (!orderDoc || !order) {
    return <div>order not found</div>
  }

  return (
    <div className="p-4">
      <div className="whitespace-pre-wrap break-all">
        {orderDoc.id}
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          {restaurant ? (
            <OrderRestaurant
              restaurant={restaurant}
            />
          ) : (
            <div className="h-[210px] w-[150px] border">
              Not found Restaurant Info.
            </div>
          )}
          {canShow && (
            <div className="sm:ml-2">
              <NewMenuItemToOrderForm
                orderDoc={orderDoc}
                menuItems={menuItems}
                updateOrderMenuItem={() =>
                  updateOrderItemsWithOrderDoc()
                }
              />
            </div>
          )}
        </div>

        {orderItemsIsLoading ? (
          <div>orderItemsIsLoading..</div>
        ) : (
          <div className="py-4">
            {orderItems
              .sort((a, b) =>
                sortByTwoString(
                  a.user.data.name,
                  b.user.data.name
                )
              )
              .map((orderItem, index) => (
                <div key={'order-item-' + index}>
                  <div>
                    {orderItem.user.data.name}
                  </div>
                  <div className="pl-2">
                    {orderItem.menuItem.data.name}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderDetail
