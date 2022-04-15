import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'

import useStorageMenus from '@supabase-folder/hooks/useStorageMenus'

const MenuList = () => {
  const {
    isInit,
    isLoading,
    error,
    storageMenus,
    recall,
  } = useStorageMenus()

  if (isInit) {
    return <div>init...</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Some error...</div>
  }

  return (
    <Box>
      <Button
        variant="contained"
        onClick={recall}
      >
        Recall
      </Button>

      <Box mt={2}>
        <Grid container spacing={2}>
          {storageMenus.map(menu => (
            <Grid
              key={`storage-menu-grid-${menu.id}`}
              item
              xs={6}
              sm={4}
              md={3}
            >
              <Card
                className="items-center"
                variant="outlined"
              >
                <div className="relative aspect-[3/4]">
                  <ZoomImageWithRelativeParent
                    priority
                    src={menu.publicURL}
                    alt={menu.name}
                    layout="fill"
                  />
                </div>
                <div className="text-center">
                  {menu.name}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default MenuList
