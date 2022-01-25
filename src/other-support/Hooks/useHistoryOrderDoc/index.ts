import React from 'react'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import { getDocumentData } from '@other-support/Consts'

const useHistoryOrderDoc = (
  orderDoc: DocumentDataSnapshot
) => {
  const order = React.useMemo(() => {
    return getDocumentData(orderDoc)
  }, [orderDoc])

  const restaurantName = React.useMemo(() => {
    const orderRestaurantName: string =
      order?.['restaurant-name']

    if (!orderRestaurantName) {
      return ''
    }

    return orderRestaurantName
  }, [order])

  return {
    order,
    restaurantName,
  }
}

export default useHistoryOrderDoc
