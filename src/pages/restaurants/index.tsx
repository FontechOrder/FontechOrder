import React from 'react'

import { Box } from '@mui/material'

import PageContentDefault from '@containers/PageContent/default'
import RestaurantList from '@components/RestaurantList'

const Restaurants = () => {
  return (
    <PageContentDefault>
      <Box m={2}>
        <div>Restaurants</div>
        <RestaurantList />
      </Box>
    </PageContentDefault>
  )
}

export default Restaurants
