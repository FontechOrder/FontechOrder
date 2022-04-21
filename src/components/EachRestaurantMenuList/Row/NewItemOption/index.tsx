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

import useAdminUser from '@other-support/hooks/useAdminUser'

import type { RestaurantMenuWithItemOptionType } from '@supabase-folder/types'

type NewItemOptionObject = {
  name: string
  cost: number
}

const NewItemOptionSchema = Yup.object().shape({
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

const EachRestaurantMenuListRowNewItemOption = ({
  restaurantMenuWithItemOption,
}: {
  restaurantMenuWithItemOption: RestaurantMenuWithItemOptionType
}) => {
  // console.log(
  //   'EachRestaurantMenuListRowNewItemOption restaurantMenuWithItemOption: ',
  //   restaurantMenuWithItemOption
  // )

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewItemOptionObject>({
    resolver: yupResolver(NewItemOptionSchema),
  })

  const { adminUser } = useAdminUser()

  if (!adminUser) {
    return null
  }

  return (
    <TableRow>
      <TableCell>
        <IconButton
          size="small"
          onClick={handleSubmit(data => {
            // console.log(
            //   `new option to: ${restaurantMenuWithItemOption.type}.${restaurantMenuWithItemOption.name};; id=${restaurantMenuWithItemOption.id}`
            // )

            console.log(
              `data: ${JSON.stringify(data)}`
            )

            reset({
              name: '',
              cost: 0,
            })
          })}
        >
          <AddCircleIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        {restaurantMenuWithItemOption.type}.
        {restaurantMenuWithItemOption.name}
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
          inputProps={{
            style: { textAlign: 'right' },
          }}
          required
          id="cost"
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
    </TableRow>
  )
}
export default EachRestaurantMenuListRowNewItemOption
