import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material'

import AddCircleIcon from '@mui/icons-material/AddCircle'

import type { RestaurantMenuWithItemOptionListType } from '@supabase-folder/types'

import useAdminUser from '@other-support/hooks/useAdminUser'

type NewMenuItemObject = {
  type: string
  name: string
  cost: number
}

const NewMenuItemSchema = Yup.object().shape({
  type: Yup.string(),
  name: Yup.string()
    .required('不可為空')
    .min(2, '太少2~'),
  cost: Yup.number()
    // .transform(value =>
    //   isNaN(value) ? undefined : value
    // )
    // .required('不可為空')
    // .transform(value =>
    //   value % 5 === 0 ? value : undefined
    // )
    // .required('你懂5的倍數？')

    .transform(value =>
      !isNaN(value) && value % 5 === 0
        ? value
        : undefined
    )
    .required('你懂5的倍數？')

    .positive('"正"整數')
    .max(200, '太能吃200!!'),
})

const EachRestaurantMenuListNewMenuItemRow = ({
  restaurantId,
  restaurantMenuWithItemOptions,
}: {
  restaurantId: number
  restaurantMenuWithItemOptions: RestaurantMenuWithItemOptionListType
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMenuItemObject>({
    resolver: yupResolver(NewMenuItemSchema),
  })

  console.log(
    'EachRestaurantMenuListNewMenuItemRow restaurantMenuWithItemOptions: ',
    restaurantMenuWithItemOptions
  )

  const { adminUser } = useAdminUser()

  if (!adminUser) {
    return null
  }

  return (
    <TableRow>
      <TableCell>
        <IconButton
          // aria-label="expand row"
          size="small"
          onClick={handleSubmit(data => {
            console.log(
              'new menu item restaurant restaurantId: ',
              restaurantId
            )

            console.log(
              `data: ${JSON.stringify(data)}`
            )

            reset({
              type: '',
              name: '',
              cost: 0,
            })
          })}
        >
          <AddCircleIcon />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField
          required
          id="name"
          label="Name"
          fullWidth
          variant="standard"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message ?? ' '}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          required
          id="cost"
          inputProps={{
            style: { textAlign: 'right' },
          }}
          label="Cost"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          {...register('cost')}
          error={!!errors.cost}
          helperText={errors.cost?.message ?? ' '}
        />
      </TableCell>
      <TableCell>
        <TextField
          required
          id="type"
          inputProps={{
            style: { textAlign: 'right' },
          }}
          label="Type"
          fullWidth
          variant="standard"
          {...register('type')}
          error={!!errors.type}
          helperText={errors.type?.message ?? ' '}
        />
      </TableCell>
    </TableRow>
  )
}
export default EachRestaurantMenuListNewMenuItemRow
