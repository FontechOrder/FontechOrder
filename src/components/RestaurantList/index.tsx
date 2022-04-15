import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CustomLink from '@components/CustomLink'

import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'

import useRestaurantList from '@supabase-folder/hooks/useRestaurantList'
const RestaurantList = () => {
  const {
    isInit,
    isLoading,
    error,
    recall,
    restaurants,
  } = useRestaurantList()

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
      <Grid container spacing={2}>
        {restaurants.map(restaurant => (
          <Grid
            key={`restaurant-grid-${restaurant.name}`}
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
                {restaurant.image_url && (
                  <ZoomImageWithRelativeParent
                    priority
                    src={restaurant.image_url}
                    alt={restaurant.name}
                    layout="fill"
                  />
                )}
              </div>

              <CustomLink
                className="w-full text-center"
                title={restaurant.name}
                linkProps={{
                  href: `/restaurants/detail?id=${restaurant.id}`,
                  as: `${process.env.NEXT_PUBLIC_NODE_ENV}/restaurants/detail?id=${restaurant.id}`,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default RestaurantList
