import React from 'react'

import PageContentWithId from '@containers/PageContent/withId'

const OrderDetail = () => {
  return (
    <PageContentWithId>
      {id => <div>OrderDetail with id:{id}</div>}
    </PageContentWithId>
  )
}

export default OrderDetail
