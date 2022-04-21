import React from 'react'

import { Box } from '@mui/material'

import PageContent from '@containers/PageContent'
import MenuList from '@components/MenuList'

const Menus = () => {
  return (
    <PageContent>
      <Box m={2}>
        <MenuList />
      </Box>
    </PageContent>
  )
}

export default Menus
