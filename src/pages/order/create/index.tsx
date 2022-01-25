import React from 'react'
import PageContentDefault from '@containers/PageContent/default'

import OrderCreateComponent from '@components/OrderCreateComponent'

import useUserManager from '@redux-folder/hooks/useUserManager'

const OrderCreate = () => {
  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  return (
    <PageContentDefault>
      {canShow ? (
        <OrderCreateComponent />
      ) : (
        <div>???</div>
      )}
    </PageContentDefault>
  )
}

export default OrderCreate
