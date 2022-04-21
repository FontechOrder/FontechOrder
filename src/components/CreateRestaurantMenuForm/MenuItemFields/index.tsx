import React from 'react'

import { useFieldArray } from 'react-hook-form'

import { Box, IconButton } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'

import type {
  Control,
  UseFormRegister,
  FormState,
} from 'react-hook-form'

import MenuItemField from '@components/CreateRestaurantMenuForm/MenuItemField'

import type { CreateRestaurantMenuSchemaType } from '@other-support/types'

const MenuItemFields = ({
  register,
  control,
  formState,
}: {
  register: UseFormRegister<CreateRestaurantMenuSchemaType>
  control: Control<
    CreateRestaurantMenuSchemaType,
    any
  >
  formState: FormState<CreateRestaurantMenuSchemaType>
}) => {
  const { fields, append, remove } =
    useFieldArray({
      control,
      name: 'menuItems',
    })

  const disabledAppendField =
    React.useMemo(() => {
      return fields.length >= 10
    }, [fields])

  const appendField = React.useCallback(() => {
    if (disabledAppendField) {
      return
    }

    append({
      hidden: false,
      name: '',
      cost: 0,
      type: '',
    })
  }, [disabledAppendField, append])

  return (
    <Box>
      {fields.map((field, index) => (
        <MenuItemField
          key={`menu-items-${field.id}`}
          register={register}
          control={control}
          index={index}
          formState={formState}
          removeButtonClick={() => remove(index)}
        />
      ))}

      {!disabledAppendField && (
        <Box className="flex justify-center p-4 ">
          <IconButton onClick={appendField}>
            <AddIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
export default MenuItemFields
