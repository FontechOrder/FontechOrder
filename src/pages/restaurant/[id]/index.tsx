import React from 'react'
import { useRouter } from 'next/router'
import PageContentDefault from '@containers/PageContent/default'

import RestaurantDetail from '@components/RestaurantDetail'
import NewRestaurantMenuItemsLink from '@components/NewRestaurantMenuItemsLink'

const RestaurantId = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageContentDefault>
      <NewRestaurantMenuItemsLink id={id} />
      <RestaurantDetail id={id} />
    </PageContentDefault>
  )
}

export default RestaurantId
