import React from 'react'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'

import type { DatabaseMenuItemType } from '@supabase-folder/types'

import CreateRestaurantMenuForm from '@components/CreateRestaurantMenuForm'
import CreateSelectRestaurantMenuOptionListForm from '@components/CreateSelectRestaurantMenuOptionListForm'
import RestaurantMenuTableRow from '@components/RestaurantMenuTableRow'

import useRestaurantMenuList from '@supabase-folder/hooks/useRestaurantMenuList'

import { allKeysOfDatabaseMenuItemSchema } from '@other-support/data'

interface RestaurantMenuListWithCreateProps {
  restaurantId: number
}

const RestaurantMenuListWithCreate: React.FC<
  RestaurantMenuListWithCreateProps
> = ({ restaurantId }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] =
    React.useState(5)
  const [
    selectRestauramtMenu,
    setSelectRestauramtMenu,
  ] = React.useState<
    DatabaseMenuItemType | undefined
  >(undefined)

  const handleChangePage = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const { isLoading, restaurantMenus } =
    useRestaurantMenuList(restaurantId)

  // console.log(
  //   'CreateRestaurantMenuForm restaurantMenus: ',
  //   restaurantMenus
  // )

  if (isLoading) {
    return <Box>Loading...</Box>
  }

  return (
    <>
      <Paper className="w-full overflow-hidden">
        <TableContainer className="max-h-[28rem]">
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {allKeysOfDatabaseMenuItemSchema.map(
                  key => (
                    <TableCell
                      key={`Menu-item-schema-tr-${key}`}
                    >
                      {key}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantMenus
                .slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                .map(restaurantMenu => {
                  return (
                    <RestaurantMenuTableRow
                      key={`restaurant-menu-${restaurantMenu.id}`}
                      restaurantMenu={
                        restaurantMenu
                      }
                      selectCallback={() =>
                        setSelectRestauramtMenu(
                          restaurantMenu
                        )
                      }
                    />
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={restaurantMenus.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={
            handleChangeRowsPerPage
          }
        />
      </Paper>

      <Box mt={2}>
        {selectRestauramtMenu ? (
          <CreateSelectRestaurantMenuOptionListForm
            selectRestauramtMenu={
              selectRestauramtMenu
            }
            clearCallback={() =>
              setSelectRestauramtMenu(undefined)
            }
          />
        ) : (
          <CreateRestaurantMenuForm
            restaurantId={restaurantId}
          />
        )}
      </Box>
    </>
  )
}

export default RestaurantMenuListWithCreate
