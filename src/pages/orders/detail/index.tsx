import React from 'react'

import PageContentWithId from '@containers/PageContent/withId'

import EachOrder from '@components/EachOrder'

const OrderDetail = () => {
  return (
    <PageContentWithId>
      {id => <EachOrder id={id} />}
    </PageContentWithId>
  )
}

export default OrderDetail
