import React from 'react'
import PageContentDefault from '@containers/PageContent/default'

import useUserManager from '@redux-folder/hooks/useUserManager'
import RestaurantIdCreateComponent from '@components/RestaurantIdCreateComponent'

const RestaurantIdCreate = () => {
  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  return (
    <PageContentDefault>
      {canShow ? (
        <RestaurantIdCreateComponent />
      ) : (
        <div>???</div>
      )}
    </PageContentDefault>
  )
}

export default RestaurantIdCreate
