import React from 'react'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import useHistoryOrderDoc from '@other-support/Hooks/useHistoryOrderDoc'

import CustomLink from '@components/CustomLink'

interface OrderLiHistoryProps {
  orderDoc: DocumentDataSnapshot
}

const OrderLiHistory = ({
  orderDoc,
}: OrderLiHistoryProps) => {
  const { restaurantName } =
    useHistoryOrderDoc(orderDoc)

  const title = React.useMemo(() => {
    if (restaurantName) {
      return `${orderDoc.id} ${restaurantName}`
    }

    return orderDoc.id
  }, [restaurantName, orderDoc.id])

  return (
    <li>
      <CustomLink
        title={title}
        linkProps={{
          href: `/order/history/[id]?id=${orderDoc.id}`,
          as: `${process.env.pathPrefix}/order/history/${orderDoc.id}`,
        }}
      />
    </li>
  )
}

export default OrderLiHistory
