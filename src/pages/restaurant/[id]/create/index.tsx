import React from 'react'
import { useRouter } from 'next/router'
import PageContentDefault from '@containers/PageContent/default'

import useUserManager from '@redux-folder/hooks/useUserManager'
import RestaurantIdCreateComponent from '@components/RestaurantIdCreateComponent'

const RestaurantIdCreate = () => {
  const router = useRouter()
  const { id } = router.query

  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  return (
    <PageContentDefault>
      {canShow ? (
        <RestaurantIdCreateComponent id={id} />
      ) : (
        <div>???</div>
      )}
    </PageContentDefault>
  )
}

export default RestaurantIdCreate
