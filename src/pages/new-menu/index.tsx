import React from 'react'

import PageContentAdmin from '@containers/PageContent/admin'
import NewRestaurantMenu from '@components/NewRestaurantMenu'

const NewMenu = () => {
  return (
    <PageContentAdmin>
      <NewRestaurantMenu />
    </PageContentAdmin>
  )
}

export default NewMenu
