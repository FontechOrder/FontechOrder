import React from 'react'

import PageContentDefault from '@containers/PageContent/default'
import OrderList from '@components/OrderList'
import NewOrdersLink from '@components/NewOrdersLink'

import { requestUsers } from '@other-support/Database/db'

const Order = () => {
  React.useEffect(() => {
    const asyncRequestUsers = async () => {
      try {
        const users = await requestUsers()
        console.log('users: ', users)
      } catch {
        console.log('asyncRequestUsers fail.')
      }
    }

    asyncRequestUsers()
  }, [])

  return (
    <PageContentDefault>
      <NewOrdersLink />
      <OrderList />
    </PageContentDefault>
  )
}

export default Order
