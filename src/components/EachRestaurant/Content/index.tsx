import React from 'react'
import classnames from 'classnames'

import useEachRestaurant from '@supabase-folder/hooks/useEachRestaurant'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'
import EachRestaurantMenuList from '@components/EachRestaurantMenuList'

interface EachRestaurantContentProps {
  id: number
}

const EachRestaurantContent: React.FC<
  EachRestaurantContentProps
> = ({ id }) => {
  const { isInit, isLoading, error, restaurant } =
    useEachRestaurant(id)

  if (isInit) {
    return <div>content init...</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Get Error...</div>
  }

  if (!restaurant) {
    return <div>Invalid Restaurant</div>
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={3}>
          <Box
            className={classnames(
              'relative aspect-[3/4]',
              !restaurant.image_url &&
                'bg-blue-300'
            )}
          >
            {restaurant.name}
            {restaurant.image_url && (
              <ZoomImageWithRelativeParent
                priority
                src={restaurant.image_url}
                alt={restaurant.name}
                layout="fill"
              />
            )}
          </Box>
        </Grid>

        <Grid item xs={8} sm={8} md={9}>
          <Box className="flex h-full items-center justify-center bg-yellow-500">
            Form
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <EachRestaurantMenuList id={id} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default EachRestaurantContent
