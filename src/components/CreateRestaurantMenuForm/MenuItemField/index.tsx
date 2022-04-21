import React from 'react'
import classnames from 'classnames'

import {
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Checkbox,
  IconButton,
  Collapse,
  FormHelperText,
} from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import RemoveIcon from '@mui/icons-material/Remove'

import type {
  Control,
  UseFormRegister,
  FormState,
} from 'react-hook-form'

import type {
  CreateRestaurantMenuSchemaType,
  EmptyCallback,
} from '@other-support/types'

import MenuItemOptionFields from '@components/CreateRestaurantMenuForm/MenuItemOptionFields'

import { allKeysOfNoIdDatabaseMenuItemSchema } from '@other-support/data'

import { emptyCallback } from '@other-support/consts'

const MenuItemField = ({
  register,
  index,
  control,

  formState,
  removeButtonClick = emptyCallback,
}: {
  register: UseFormRegister<CreateRestaurantMenuSchemaType>
  index: number
  control: Control<
    CreateRestaurantMenuSchemaType,
    any
  >
  formState: FormState<CreateRestaurantMenuSchemaType>
  removeButtonClick: EmptyCallback
}) => {
  const [open, setOpen] = React.useState(false)

  const { errors } = formState
  // console.log(
  //   `MenuItemField index:${index}, errors:`,
  //   errors.menuItems?.[index]
  // )
  const isMenuItemOptionError =
    React.useMemo(() => {
      return !!errors?.menuItems?.[index]
        ?.menuItemOptions
    }, [errors, index])

  return (
    <Card>
      <CardContent
        className={classnames(
          'flex flex-row whitespace-pre-wrap break-all'
        )}
      >
        <Paper
          className="item-center flex flex-col justify-center"
          elevation={0}
        >
          <IconButton
            size="small"
            onClick={() =>
              setOpen(currentOpen => !currentOpen)
            }
          >
            {open ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </IconButton>
          <FormHelperText
            error
            className="!text-center"
          >
            {isMenuItemOptionError ? '*' : ' '}
          </FormHelperText>
        </Paper>
        <Checkbox
          size="small"
          id="hidden"
          {...register(
            `menuItems.${index}.hidden`
          )}
        />
        <Grid container spacing={1}>
          {allKeysOfNoIdDatabaseMenuItemSchema.map(
            each => (
              <Grid
                key={`gird-menu-items.${index}.${each.key}`}
                item
                xs={12}
                sm={4}
              >
                <TextField
                  required={each.required}
                  label={each.label}
                  type={each.type}
                  fullWidth
                  variant="standard"
                  {...register(
                    `menuItems.${index}.${each.key}`
                  )}
                  error={
                    !!errors.menuItems?.[index]?.[
                      each.key
                    ]
                  }
                  helperText={
                    errors.menuItems?.[index]?.[
                      each.key
                    ]?.message ?? ' '
                  }
                />
              </Grid>
            )
          )}
        </Grid>

        <IconButton
          disabled={!index}
          onClick={removeButtonClick}
          className={classnames(
            index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <RemoveIcon />
        </IconButton>
      </CardContent>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <Card className="m-2">
          <Typography
            variant="h4"
            className="p-2"
          >
            Options
          </Typography>

          <MenuItemOptionFields
            register={register}
            control={control}
            itemIndex={index}
            formState={formState}
          />
        </Card>
      </Collapse>
    </Card>
  )
}
export default MenuItemField
