import React from 'react'
import PageContentDefault from '@containers/PageContent/default'

import NewRestaurantForm from '@components/NewRestaurantForm'

import useUserManager from '@redux-folder/hooks/useUserManager'

const RestaurantCreate = () => {
  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  return (
    <PageContentDefault>
      {canShow ? (
        <NewRestaurantForm />
      ) : (
        <div>???</div>
      )}
    </PageContentDefault>
  )
}

export default RestaurantCreate
