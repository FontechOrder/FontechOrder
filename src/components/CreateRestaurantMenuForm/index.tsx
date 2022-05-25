import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, Paper } from '@mui/material'

import { LoadingButton } from '@mui/lab'

import { sleep } from '@other-support/consts'
import createRestaurantMenuList from '@supabase-folder/functions/createRestaurantMenuList'

import MenuItemFields from '@components/CreateRestaurantMenuForm/MenuItemFields'

import type { CreateRestaurantMenuSchemaType } from '@other-support/types'

const defaultValues: CreateRestaurantMenuSchemaType =
  {
    menuItems: [
      {
        hidden: false,
        name: '',
        cost: 0,
        type: '',

        menuItemOptions: [
          {
            name: '',
            cost: 0,
          },
        ],
      },
    ],
  }

const CreateRestaurantMenuSchema =
  Yup.object().shape({
    menuItems: Yup.array().of(
      Yup.object().shape({
        hidden: Yup.boolean().required(
          'Something Error'
        ),
        name: Yup.string()
          .required('不可為空')
          .min(2, '太少2~'),
        cost: Yup.number()
          .transform(value => {
            if (isNaN(value)) {
              return
            }

            if (value % 5 !== 0) {
              return
            }

            if (value === 0) {
              return
            }

            return value
          })

          .positive('"正"整數')
          .max(200, '太能吃200!!')

          .required('你懂5的倍數？'),
        type: Yup.string().when(
          'menuItemOptions',
          {
            is: (menuItemOptions: any) =>
              Array.isArray(menuItemOptions) &&
              menuItemOptions.length > 0,
            then: Yup.string()
              .required('Required for Options')
              .min(2, '太少2~'),
          }
        ),

        menuItemOptions: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .required('不可為空')
              .min(2, '太少2~'),
            cost: Yup.number()
              .transform(value =>
                !isNaN(value) && value % 5 === 0
                  ? value
                  : undefined
              )
              .required('你懂5的倍數？')

              .positive('"正"整數')
              .max(200, '太能吃200!!'),
          })
        ),
      })
    ),
  })

interface CreateRestaurantMenuFormProps {
  restaurantId: number
}

const CreateRestaurantMenuForm: React.FC<
  CreateRestaurantMenuFormProps
> = ({ restaurantId }) => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState,
  } = useForm<CreateRestaurantMenuSchemaType>({
    defaultValues,
    resolver: yupResolver(
      CreateRestaurantMenuSchema
    ),
  })

  return (
    <Paper className="p-2">
      <Box>
        <MenuItemFields
          {...{ control, register, formState }}
        />
      </Box>

      <LoadingButton
        // disabled={!formState.isValid}
        loading={isLoading}
        className="xs:w-auto !mt-2 w-full"
        variant="contained"
        type="submit"
        onClick={handleSubmit(async data => {
          if (isLoading) {
            return
          }
          setIsLoading(true)

          try {
            await createRestaurantMenuList({
              restaurantMenuList: data,
              restaurantId,
            })

            reset()
            await sleep(2000)
          } catch {
            console.log(
              'asyncCreateRestaurantMenus error'
            )
          }

          setIsLoading(false)
        })}
      >
        CREATE
      </LoadingButton>
    </Paper>
  )
}

export default CreateRestaurantMenuForm
