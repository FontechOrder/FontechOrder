import React from 'react'
import { useRouter } from 'next/router'
import PageContentDefault from '@containers/PageContent/default'

import RestaurantDetail from '@components/RestaurantDetail'

const RestaurantId = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageContentDefault>
      <RestaurantDetail id={id} />
    </PageContentDefault>
  )
}

export default RestaurantId
