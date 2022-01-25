import React from 'react'
import { useRouter } from 'next/router'
import PageContentDefault from '@containers/PageContent/default'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

const OrderHistoryId = () => {
  const router = useRouter()

  const firstQueryString =
    forceStringForNextRouterQueryFirst(
      router?.query?.id
    )

  return (
    <PageContentDefault>
      <div>
        OrderHistoryId with: {firstQueryString}
      </div>
    </PageContentDefault>
  )
}

export default OrderHistoryId
