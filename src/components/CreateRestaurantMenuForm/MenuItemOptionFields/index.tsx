import React from 'react'

import { useFieldArray } from 'react-hook-form'

import {
  Card,
  Box,
  Grid,
  TextField,
  IconButton,
} from '@mui/material'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveIcon from '@mui/icons-material/Remove'

import type {
  Control,
  UseFormRegister,
  FormState,
} from 'react-hook-form'

import type { CreateRestaurantMenuSchemaType } from '@other-support/types'

import { allKeysOfNoIdDatabaseMenuItemOptionSchema } from '@other-support/data'

const MenuItemOptionFields = ({
  register,
  control,
  itemIndex,
  formState: { errors },
}: {
  register: UseFormRegister<CreateRestaurantMenuSchemaType>
  control: Control<
    CreateRestaurantMenuSchemaType,
    any
  >
  itemIndex: number
  formState: FormState<CreateRestaurantMenuSchemaType>
}) => {
  const { fields, append, remove } =
    useFieldArray({
      control,
      name: `menuItems.${itemIndex}.menuItemOptions`,
    })

  // console.log(
  //   `MenuItemOptionFields id:${itemIndex}, fields: ${JSON.stringify(
  //     fields
  //   )}`
  // )

  // console.log(
  //   `MenuItemOptionFields index:${itemIndex}, errors:`,
  //   errors.menuItems?.[itemIndex]?.menuItemOptions
  // )
  const disabledAppendField =
    React.useMemo(() => {
      return fields.length >= 10
    }, [fields])

  const appendField = React.useCallback(() => {
    if (disabledAppendField) {
      return
    }

    append({
      name: '',
      cost: 0,
    })
  }, [disabledAppendField, append])

  return (
    <Box>
      {fields.map((field, index) => (
        <Card
          className="ml-2 flex flex-row p-2"
          key={`menu-item-option-${field.id}`}
        >
          <Grid container spacing={1}>
            {allKeysOfNoIdDatabaseMenuItemOptionSchema.map(
              each => (
                <Grid
                  key={`gird-menu-item-option.${itemIndex}.menuItemOptions.${index}.${each.key}`}
                  item
                  xs={6}
                >
                  <TextField
                    required={each.required}
                    label={each.label}
                    type={each.type}
                    fullWidth
                    variant="standard"
                    {...register(
                      `menuItems.${itemIndex}.menuItemOptions.${index}.${each.key}`
                    )}
                    error={
                      !!errors.menuItems?.[
                        itemIndex
                      ]?.menuItemOptions?.[
                        index
                      ]?.[each.key]
                    }
                    helperText={
                      errors.menuItems?.[
                        itemIndex
                      ]?.menuItemOptions?.[
                        index
                      ]?.[each.key]?.message ??
                      ' '
                    }
                  />
                </Grid>
              )
            )}
          </Grid>
          <IconButton
            onClick={() => remove(index)}
          >
            <RemoveIcon />
          </IconButton>
        </Card>
      ))}
      {!disabledAppendField && (
        <Box className="flex justify-center p-4 ">
          <IconButton onClick={appendField}>
            <AddCircleIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
export default MenuItemOptionFields
