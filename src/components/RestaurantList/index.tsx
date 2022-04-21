import React from 'react'

import {
  Box,
  Grid,
  Card,
  Button,
} from '@mui/material'

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

  // console.log(
  //   'RestaurantList restaurants:',
  //   restaurants
  // )

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
                title={`${restaurant.id}.${restaurant.name}`}
                linkProps={{
                  href: `/restaurants/detail?id=${restaurant.id}`,
                  as: `${process.env.pathPrefix}/restaurants/detail?id=${restaurant.id}`,
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
