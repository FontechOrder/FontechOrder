import React from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import useEachRestaurantMenuWithItemOptions from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions'

interface EachRestaurantMenuListProps {
  id: number
}

const EachRestaurantMenuList: React.FC<
  EachRestaurantMenuListProps
> = ({ id }) => {
  const [open, setOpen] = React.useState(false)

  const {
    menuInit,
    menuIsLoading,
    menuError,
    restaurantMenuWithItemOptions,
  } = useEachRestaurantMenuWithItemOptions(id)

  // console.log(`EachRestaurantMenuList id: ${id}`)
  // console.log(
  //   `EachRestaurantMenuList restaurantMenuWithItemOptions: ${JSON.stringify(
  //     restaurantMenuWithItemOptions
  //   )}`
  // )

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
                <React.Fragment
                  key={
                    restaurantMenuWithItemOption.name
                  }
                >
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
                        onClick={() =>
                          setOpen(!open)
                        }
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      {
                        restaurantMenuWithItemOption.name
                      }
                    </TableCell>
                    <TableCell align="right">
                      {
                        restaurantMenuWithItemOption.cost
                      }
                    </TableCell>
                    <TableCell align="right">
                      {
                        restaurantMenuWithItemOption.type
                      }
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
                                <TableCell>
                                  Name
                                </TableCell>
                                <TableCell>
                                  Cost
                                </TableCell>
                                <TableCell align="right">
                                  Type
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {restaurantMenuWithItemOption.itemOptions.map(
                                itemOption => (
                                  <TableRow
                                    key={
                                      itemOption.name
                                    }
                                  >
                                    <TableCell
                                      component="th"
                                      scope="row"
                                    >
                                      {
                                        itemOption.name
                                      }
                                    </TableCell>
                                    <TableCell>
                                      {
                                        itemOption.cost
                                      }
                                    </TableCell>
                                    <TableCell align="right">
                                      {
                                        itemOption.type
                                      }
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              )
            )}
          </TableBody>
        }
      </Table>
    </TableContainer>
  )
}

export default EachRestaurantMenuList
