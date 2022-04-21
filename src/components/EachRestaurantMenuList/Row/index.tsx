import React from 'react'

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import type { RestaurantMenuWithItemOptionType } from '@supabase-folder/types'

// import EachRestaurantMenuListRowNewItemOption from '@components/EachRestaurantMenuList/Row/NewItemOption'

const EachRestaurantMenuListRow = ({
  restaurantMenuWithItemOption,
}: {
  restaurantMenuWithItemOption: RestaurantMenuWithItemOptionType
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': {
            borderBottom: 'unset',
          },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {restaurantMenuWithItemOption.name}
        </TableCell>
        <TableCell align="right">
          {restaurantMenuWithItemOption.cost}
        </TableCell>
        <TableCell align="right">
          {restaurantMenuWithItemOption.type}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={6}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              >
                Options
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
              >
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Type</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">
                      Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {restaurantMenuWithItemOption.itemOptions.map(
                    itemOption => (
                      <TableRow
                        key={itemOption.name}
                      >
                        <TableCell />
                        <TableCell>
                          {itemOption.type}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                        >
                          {itemOption.name}
                        </TableCell>
                        <TableCell align="right">
                          {itemOption.cost}
                        </TableCell>
                      </TableRow>
                    )
                  )}

                  {/*                  <EachRestaurantMenuListRowNewItemOption
                    restaurantMenuWithItemOption={
                      restaurantMenuWithItemOption
                    }
                  /> */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
export default EachRestaurantMenuListRow
