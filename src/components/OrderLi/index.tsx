import React from 'react'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import useOrderRestaurant from '@other-support/Hooks/useOrderRestaurant'

import CustomLink from '@components/CustomLink'

interface OrderLiProps {
  orderDoc: DocumentDataSnapshot
}

const OrderLi = ({ orderDoc }: OrderLiProps) => {
  const { isLoading, restaurantName } =
    useOrderRestaurant(orderDoc)

  const title = React.useMemo(() => {
    if (isLoading) {
      return `${orderDoc.id} Loading...`
    }

    if (restaurantName) {
      return `${orderDoc.id} ${restaurantName}`
    }

    return orderDoc.id
  }, [isLoading, restaurantName, orderDoc.id])

  return (
    <li>
      <CustomLink
        title={title}
        linkProps={{
          href: `/order/[id]?id=${orderDoc.id}`,
          as: `${process.env.pathPrefix}/order/${orderDoc.id}`,
        }}
      />
    </li>
  )
}

export default OrderLi
