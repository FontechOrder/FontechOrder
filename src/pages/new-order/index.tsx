import React from 'react'

import PageContentAdmin from '@containers/PageContent/admin'
import NewOrders from '@components/NewOrders'

const NewOrder = () => {
  return (
    <PageContentAdmin>
      <NewOrders />
    </PageContentAdmin>
  )
}

export default NewOrder
