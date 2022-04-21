import React from 'react'

import {
  TableCell,
  TableRow,
  Popover,
  Button,
} from '@mui/material'

import { allKeysOfDatabaseMenuItemSchema } from '@other-support/data'

import type { DatabaseMenuItemType } from '@supabase-folder/types'
import type { EmptyCallback } from '@other-support/types'

const RestaurantMenuTableRow = ({
  restaurantMenu,
  selectCallback,
}: {
  restaurantMenu: DatabaseMenuItemType
  selectCallback?: EmptyCallback
}) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLTableRowElement | null>(
      null
    )

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement>
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseThenSelect = () => {
    setAnchorEl(null)
    selectCallback?.()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <TableRow
        onClick={handleClick}
        role="checkbox"
        tabIndex={-1}
        key={`restaurant-menu-${restaurantMenu.id}`}
      >
        {allKeysOfDatabaseMenuItemSchema.map(
          key => {
            const value = restaurantMenu[key]
            return (
              <TableCell
                key={`Menu-item-schema-td-${key}`}
              >
                {value && value.toString()}
              </TableCell>
            )
          }
        )}
      </TableRow>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Button onClick={handleCloseThenSelect}>
          Select
        </Button>
        <Button onClick={handleClose}>
          Close
        </Button>
      </Popover>
    </>
  )
}

export default RestaurantMenuTableRow
