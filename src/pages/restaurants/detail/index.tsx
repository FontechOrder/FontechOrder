import React from 'react'

import Box from '@mui/material/Box'

import PageContentDefault from '@containers/PageContent/default'
import EachRestaurant from '@components/EachRestaurant'

const RestaurantDetail = () => {
  return (
    <PageContentDefault>
      <Box m={2}>
        <EachRestaurant />
      </Box>
    </PageContentDefault>
  )
}

export default RestaurantDetail
