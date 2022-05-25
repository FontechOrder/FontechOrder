import React from 'react'
import {
  Paper,
  Card,
  Box,
  Button,
  IconButton,
  Grid,
  Chip,
  Stack,
} from '@mui/material'

import { LoadingButton } from '@mui/lab'

import RestartAltIcon from '@mui/icons-material/RestartAlt'

import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

import {
  PickersDay,
  // PickersDayProps,
} from '@mui/x-date-pickers/PickersDay'

import { formatInTimeZone } from 'date-fns-tz'

import {
  forceInstanceError,
  shuffledWithArrayAndLength,
} from '@other-support/consts'

import type {
  DatabaseRestaurantType,
  DatabaseRestaurantListType,
  NoIdDatabaseOrderInterface,
} from '@supabase-folder/types'

import fetchRestaurantList from '@supabase-folder/functions/fetchRestaurantList'
import fetchOrderList from '@supabase-folder/functions/fetchOrderList'

import createOrders from '@supabase-folder/functions/createOrders'

type CreateOrderType = {
  dateText: string
  restaurant: DatabaseRestaurantType
}

type CreateOrderListType = Array<CreateOrderType>

const NewOrders = () => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const [value, setValue] =
    React.useState<Date | null>(new Date())

  const [
    disabledDateTextList,
    setDisabledDateTextList,
  ] = React.useState<Array<string>>([])

  const [
    markedDateTextList,
    setMarkedDateTextList,
  ] = React.useState<Array<string>>([])

  const [
    selectedRestaurantList,
    setSelectedRestaurantList,
  ] = React.useState<DatabaseRestaurantListType>(
    []
  )

  const [createOrderList, setCreateOrderList] =
    React.useState<CreateOrderListType>([])

  // console.log(
  //   'disabledDateTextList: ',
  //   disabledDateTextList
  // )

  const doAsyncFetchRestaurantList =
    React.useCallback(() => {
      const asyncFetchRestaurantList =
        async () => {
          fetchRestaurantList()
            .then(restaurantList => {
              setSelectedRestaurantList(
                restaurantList
              )
            })
            .catch()
        }

      asyncFetchRestaurantList()
    }, [])

  const randomRestaurantButtonClick =
    React.useCallback(() => {
      const shuffled = shuffledWithArrayAndLength(
        {
          array: selectedRestaurantList,
          length: markedDateTextList.length,
        }
      )

      setCreateOrderList(
        markedDateTextList.flatMap(
          (markedDateText, index) => {
            const selectedRestaurant =
              shuffled[index]

            if (!selectedRestaurant) {
              return []
            }

            return [
              {
                dateText: markedDateText,
                restaurant: selectedRestaurant,
              },
            ]
          }
        )
      )
    }, [
      selectedRestaurantList,
      markedDateTextList,
    ])

  const createOrderListButtonClick =
    React.useCallback(() => {
      if (isLoading) {
        return
      }

      setIsLoading(true)

      const asyncCreateOrders = async () => {
        // console.log(
        //   'asyncCreateOrders createOrderList: ',
        //   createOrderList
        // )

        try {
          await createOrders(
            createOrderList.map<NoIdDatabaseOrderInterface>(
              createOrder => ({
                finish: false,
                date_text: createOrder.dateText,
                restaurant_id:
                  createOrder.restaurant.id,
              })
            )
          )

          setCreateOrderList([])
        } catch (error) {
          console.log(
            'createOrders error: ',
            forceInstanceError(error).message
          )
        }

        setIsLoading(false)
      }
      asyncCreateOrders()
    }, [isLoading, createOrderList])

  React.useEffect(() => {
    doAsyncFetchRestaurantList()
  }, [doAsyncFetchRestaurantList])

  React.useEffect(() => {
    const asyncFetchOrders = async () => {
      try {
        const orderList = await fetchOrderList()

        setDisabledDateTextList(
          orderList.map(order => order.date_text)
        )
      } catch {}
    }
    asyncFetchOrders()
  }, [])

  return (
    <Box>
      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        columns={16}
      >
        <Grid item xs={16} md={8}>
          <Paper>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
            >
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={value}
                onChange={newValue => {
                  setValue(newValue)

                  if (!newValue) {
                    return
                  }

                  const dateText =
                    formatInTimeZone(
                      newValue,
                      'Asia/Taipei',
                      'yyyy-MM-dd'
                    )

                  setMarkedDateTextList(
                    prevMarkedDateTextList => {
                      if (
                        prevMarkedDateTextList.includes(
                          dateText
                        )
                      ) {
                        return prevMarkedDateTextList.filter(
                          each =>
                            each !== dateText
                        )
                      }

                      if (
                        prevMarkedDateTextList.length >=
                        7
                      ) {
                        return prevMarkedDateTextList
                      }

                      return [
                        ...prevMarkedDateTextList,
                        dateText,
                      ]
                    }
                  )
                }}
                renderDay={(
                  day,
                  selectedDates,
                  pickersDayProps
                ) => {
                  if (!day) {
                    return (
                      <PickersDay
                        {...pickersDayProps}
                      />
                    )
                  }

                  const dayText =
                    formatInTimeZone(
                      day,
                      'Asia/Taipei',
                      'yyyy-MM-dd'
                    )

                  if (
                    disabledDateTextList.includes(
                      dayText
                    )
                  ) {
                    return (
                      <PickersDay
                        className="!bg-gray-400 !text-white"
                        {...pickersDayProps}
                        disabled
                      />
                    )
                  }

                  if (
                    markedDateTextList.includes(
                      dayText
                    )
                  ) {
                    return (
                      <PickersDay
                        className="!bg-yellow-400 !text-white"
                        {...pickersDayProps}
                      />
                    )
                  }

                  return (
                    <PickersDay
                      {...pickersDayProps}
                    />
                  )
                }}
                renderInput={params => (
                  <TextField {...params} />
                )}
                inputFormat="'Week of' MMM d"
              />
            </LocalizationProvider>
          </Paper>
        </Grid>
        <Grid item xs={16} md={7}>
          <Paper className="p-2">
            <Card className="p-2">
              <Stack
                direction="row"
                alignItems="center"
              >
                <Box className="text-green-600">
                  Marked DateTextList (max:7):
                </Box>
                <IconButton
                  onClick={() =>
                    setMarkedDateTextList([])
                  }
                >
                  <RestartAltIcon />
                </IconButton>
              </Stack>
              <Stack
                className="flex-wrap"
                direction="row"
              >
                {markedDateTextList
                  .sort()
                  .map(markedText => (
                    <Chip
                      className="!mr-1 !mt-1"
                      key={`markedText-${markedText}`}
                      label={markedText}
                      variant="outlined"
                      onDelete={() =>
                        setMarkedDateTextList(
                          prevMarkedDateTextList =>
                            prevMarkedDateTextList.filter(
                              each =>
                                each !==
                                markedText
                            )
                        )
                      }
                    />
                  ))}
              </Stack>
            </Card>
            <Card className="p-2">
              <Stack
                direction="row"
                alignItems="center"
              >
                <Box className="text-green-600">
                  RestaurantList from Random:
                </Box>
                <IconButton
                  onClick={
                    doAsyncFetchRestaurantList
                  }
                >
                  <RestartAltIcon />
                </IconButton>
              </Stack>
              <Stack
                className="flex-wrap"
                direction="row"
              >
                {selectedRestaurantList.map(
                  restaurant => (
                    <Chip
                      className="!mr-1 !mt-1"
                      key={`restaurant-${restaurant.id}`}
                      label={restaurant.name}
                      variant="outlined"
                      onDelete={() =>
                        setSelectedRestaurantList(
                          prevSelectedRestaurantList =>
                            prevSelectedRestaurantList.filter(
                              each =>
                                each.id !==
                                restaurant.id
                            )
                        )
                      }
                    />
                  )
                )}
              </Stack>
            </Card>
            <Button
              disabled={
                markedDateTextList.length === 0
              }
              className="!mt-2"
              variant="contained"
              onClick={
                randomRestaurantButtonClick
              }
            >
              RANDOM RESTAURANT
            </Button>
          </Paper>
        </Grid>

        {createOrderList && (
          <Grid item xs={16}>
            <Paper className="p-2">
              {createOrderList.map(
                createOrder => (
                  <Box
                    key={`create-order-${createOrder.dateText}`}
                  >
                    {`${createOrder.dateText}: ${createOrder.restaurant.name}`}
                  </Box>
                )
              )}
            </Paper>
            <LoadingButton
              disabled={
                createOrderList.length === 0
              }
              loading={isLoading}
              className="!mt-2"
              variant="contained"
              onClick={createOrderListButtonClick}
            >
              CREATE ORDER
            </LoadingButton>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default NewOrders
