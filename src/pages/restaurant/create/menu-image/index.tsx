import React from 'react'
import PageContentDefault from '@containers/PageContent/default'

import NewMenuImageForm from '@components/NewMenuImageForm'

import useUserManager from '@redux-folder/hooks/useUserManager'

const RestaurantCreateMenuImage = () => {
  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  return (
    <PageContentDefault>
      {canShow ? (
        <NewMenuImageForm />
      ) : (
        <div>???</div>
      )}
    </PageContentDefault>
  )
}

export default RestaurantCreateMenuImage
