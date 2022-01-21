import React from 'react'

import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

import CustomButton from '@components/CustomButton'

import { noIdRestaurants } from '@other-support/Data'

const NewRestautantFormDataButton: React.FC =
  () => {
    const { newRestaurant } =
      useRestaurantsFirestore()

    return (
      <CustomButton
        onClick={() => {
          console.log(
            'NewRestautantFormDataButton press'
          )
          noIdRestaurants.forEach(
            noIdRestaurant =>
              newRestaurant(noIdRestaurant)
          )
        }}
      >
        NewRestautantFormDataButton
      </CustomButton>
    )
  }

export default NewRestautantFormDataButton
