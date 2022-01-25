import React from 'react'
import { useRouter } from 'next/router'
import PageContentDefault from '@containers/PageContent/default'

import OrderDetail from '@components/OrderDetail'

const RestaurantId = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageContentDefault>
      <OrderDetail id={id} />
    </PageContentDefault>
  )
}

export default RestaurantId
