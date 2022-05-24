import React from 'react'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import useEachRestaurantMenuWithItemOptions from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions'

import EachRestaurantMenuListRow from '@components/EachRestaurantMenuList/Row'

interface EachRestaurantMenuListProps {
  id: number
}

const EachRestaurantMenuList: React.FC<
  EachRestaurantMenuListProps
> = ({ id }) => {
  const {
    menuInit,
    menuIsLoading,
    menuError,
    restaurantMenuWithItemOptions,
  } = useEachRestaurantMenuWithItemOptions(id)

  if (menuInit) {
    return <div>is Init...</div>
  }

  if (menuIsLoading) {
    return <div>Loading...</div>
  }

  if (menuError) {
    return <div>menu Error</div>
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">
              Cost
            </TableCell>
            <TableCell align="right">
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        {
          <TableBody>
            {restaurantMenuWithItemOptions.map(
              restaurantMenuWithItemOption => (
                <EachRestaurantMenuListRow
                  key={
                    restaurantMenuWithItemOption.name
                  }
                  restaurantMenuWithItemOption={
                    restaurantMenuWithItemOption
                  }
                />
              )
            )}
          </TableBody>
        }
      </Table>
    </TableContainer>
  )
}

export default EachRestaurantMenuList
