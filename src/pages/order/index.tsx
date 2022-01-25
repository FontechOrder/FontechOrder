import React from 'react'

import PageContentDefault from '@containers/PageContent/default'
import OrderList from '@components/OrderList'
import NewOrdersLink from '@components/NewOrdersLink'

const Order = () => {
  return (
    <PageContentDefault>
      <NewOrdersLink />
      <OrderList />
    </PageContentDefault>
  )
}

export default Order
