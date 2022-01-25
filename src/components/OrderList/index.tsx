import React from 'react'

import OrderLi from '@components/OrderLi'
import OrderLiHistory from '@components/OrderLi/history'

import useAllOrder from '@other-support/Hooks/useAllOrder'

const OrderList = () => {
  const {
    isInit,
    isLoading,

    finishedOrderDocs,
    unfinishedOrderDocs,
    historyOrderDocs,
  } = useAllOrder()

  if (isInit) {
    return <div>isInit...</div>
  }

  if (isLoading) {
    return <div>isLoading...</div>
  }

  return (
    <div>
      <p>Active:</p>
      <ul className="list-decimal pl-8">
        {unfinishedOrderDocs.map(
          (orderDoc, index) => (
            <OrderLi
              key={`orderDoc_${index}`}
              orderDoc={orderDoc}
            />
          )
        )}
      </ul>

      <p>Finish:</p>
      <ol className="list-disc pl-8">
        {finishedOrderDocs.map(
          (orderDoc, index) => (
            <OrderLi
              key={`orderDoc_${index}`}
              orderDoc={orderDoc}
            />
          )
        )}
      </ol>
      <p>History:</p>
      <ol className="list-disc pl-8">
        {historyOrderDocs.map(
          (orderDoc, index) => (
            <OrderLiHistory
              key={`orderDoc_${index}`}
              orderDoc={orderDoc}
            />
          )
        )}
      </ol>
    </div>
  )
}

export default OrderList
