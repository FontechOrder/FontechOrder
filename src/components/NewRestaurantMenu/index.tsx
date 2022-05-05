import React from 'react'

import {
  Box,
  Grid,
  TextField,
  Autocomplete,
} from '@mui/material'

import useRestaurantList from '@supabase-folder/hooks/useRestaurantList'

import type { DatabaseRestaurantType } from '@supabase-folder/types'

import CreateRestaurantForm from '@components/CreateRestaurantForm'
import RestaurantMenuListWithCreate from '@components/RestaurantMenuListWithCreate'

const NewRestaurantMenu = () => {
  const [restaurant, setRestaurant] =
    React.useState<DatabaseRestaurantType | null>(
      null
    )

  const {
    isInit,
    isLoading,
    error,
    restaurants,
  } = useRestaurantList()

  if (isInit || isLoading) {
    return <Box>Loading...</Box>
  }

  if (error) {
    return <Box>get Error</Box>
  }

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid className="!my-auto" item xs={8}>
          <Autocomplete
            onChange={(_, restaurant) =>
              setRestaurant(restaurant)
            }
            value={restaurant}
            disablePortal
            id="choose-restaurant"
            options={restaurants}
            getOptionLabel={option =>
              `${option.id} ${option.name}`
            }
            renderInput={params => (
              <TextField
                {...params}
                label="restaurant"
              />
            )}
          />
        </Grid>
        {restaurant ? (
          <Grid item xs={12}>
            <RestaurantMenuListWithCreate
              restaurantId={restaurant.id}
            />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <CreateRestaurantForm />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default NewRestaurantMenu
