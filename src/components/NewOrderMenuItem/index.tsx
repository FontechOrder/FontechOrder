import React from 'react'

import {
  Card,
  Stack,
  Autocomplete,
  TextField,
  Button,
  IconButton,
  Grid,
  Box,
  Modal,
  Divider,
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import useEachRestaurantMenuWithItemOptions from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions'

import useUserManager from '@redux-folder/hooks/useUserManager'

import type {
  OrderItemQuantityType,
  OptionListType,
  OrderItemInterface,
  NewOrderItemInterface,
} from '@supabase-folder/types'

import { arrayRemoveElementByIndex } from '@other-support/consts'

import NewOrderMenuItemOrderButton from '@components/NewOrderMenuItem/OrderButton'

const quantities: OrderItemQuantityType[] = [
  1, 2, 3,
]

const initNewOrderItem: NewOrderItemInterface = {
  note: '',
  quantity: 1,
  option: null,
}

interface NewOrderMenuItemProps {
  orderId: number
  restaurantId: number
  recallEachOrder: () => boolean
}

const NewOrderMenuItem: React.FC<
  NewOrderMenuItemProps
> = ({
  orderId,
  restaurantId,
  recallEachOrder,
}) => {
  const [newOrderItem, setNewOrderItem] =
    React.useState(initNewOrderItem)

  const [newOrderItemList, setNewOrderItemList] =
    React.useState<Array<OrderItemInterface>>([])

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { user } = useUserManager()

  const {
    // menuInit,
    // menuIsLoading,
    // menuError,
    restaurantMenuWithItemOptions,
  } =
    useEachRestaurantMenuWithItemOptions(
      restaurantId
    )

  // console.log(
  //   'NewOrderMenuItem restaurantMenuWithItemOptions: ',
  //   restaurantMenuWithItemOptions
  // )

  const options: OptionListType =
    React.useMemo(() => {
      // { title: 'The Shawshank Redemption', year: 1994 }

      return restaurantMenuWithItemOptions.flatMap(
        menuItem => {
          const sectionTitle = menuItem.type
            ? `${menuItem.type}.${menuItem.name}`
            : menuItem.name

          return [
            {
              title: `${menuItem.cost} ${sectionTitle}`,
              sectionTitle,
              ...menuItem,
            },
            ...menuItem.itemOptions.map(
              itemOption => ({
                sectionTitle,
                title: `${itemOption.cost} ${itemOption.type}.${itemOption.name}`,
                ...itemOption,
              })
            ),
          ]
        }
      )
    }, [restaurantMenuWithItemOptions])

  const disabledAddIconButton =
    React.useMemo(() => {
      return !newOrderItem.option
    }, [newOrderItem])

  if (!user) {
    return null
  }

  return (
    <>
      <Button onClick={handleOpen}>
        NewOrderMenuItem {restaurantId}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-y-1/2 -translate-x-1/2 overflow-y-auto overflow-y-hidden rounded bg-white p-4 shadow-xl lg:h-[40rem]  lg:max-h-[90%] lg:w-[60rem]">
          <Box className="relative flex h-full w-full flex-col">
            <Grid
              container
              spacing={1}
              alignItems="center"
            >
              <Grid item xs={12} sm={7}>
                <Autocomplete
                  id="grouped-demo"
                  options={options.sort(
                    (a, b) =>
                      -b.sectionTitle.localeCompare(
                        a.sectionTitle
                      )
                  )}
                  groupBy={option =>
                    option.sectionTitle
                  }
                  getOptionLabel={option =>
                    option.title
                  }
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="點餐拉"
                    />
                  )}
                  onChange={(_, value) => {
                    setNewOrderItem(
                      currentOrderItem => ({
                        ...currentOrderItem,
                        option: value,
                      })
                    )
                  }}
                  value={newOrderItem.option}
                />
              </Grid>
              <Grid item xs={4} sm={5}>
                <Autocomplete
                  id="grouped-demo"
                  options={quantities}
                  defaultValue={
                    1 as OrderItemQuantityType
                  }
                  getOptionLabel={option =>
                    option.toString()
                  }
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="要多少講啊？"
                    />
                  )}
                  onChange={(_, value) => {
                    if (!value) {
                      return
                    }

                    setNewOrderItem(
                      currentOrderItem => ({
                        ...currentOrderItem,
                        quantity: value,
                      })
                    )
                  }}
                  value={newOrderItem.quantity}
                />
              </Grid>
              <Grid item xs={6} sm={11}>
                <TextField
                  className="w-full"
                  label="備註"
                  variant="outlined"
                  value={newOrderItem.note}
                  onChange={e =>
                    setNewOrderItem(
                      currentOrderItem => ({
                        ...currentOrderItem,
                        note: e.target.value,
                      })
                    )
                  }
                />
              </Grid>
              <Grid item xs={2} sm={1}>
                <IconButton
                  disabled={disabledAddIconButton}
                  onClick={() => {
                    // console.log(
                    //   'newOrderItem: ',
                    //   newOrderItem
                    // )

                    if (!newOrderItem.option) {
                      return
                    }

                    setNewOrderItemList(
                      currentNewOrderItemList => [
                        ...currentNewOrderItemList,
                        newOrderItem as OrderItemInterface,
                      ]
                    )

                    setNewOrderItem(
                      initNewOrderItem
                    )
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider className="py-2" />
            <Stack
              m={2}
              spacing={2}
              className="flex-1 overflow-y-auto"
            >
              {newOrderItemList.map(
                (newOrderItem, index) => (
                  <Card
                    key={`new-order-item-card-${newOrderItem.option.id}-${index}`}
                    className="flex flex-row justify-between p-2"
                  >
                    <Stack>
                      <p>
                        {newOrderItem.option.name}
                      </p>
                      <p>
                        價格：
                        {newOrderItem.option.cost}
                      </p>
                      <p>
                        數量：
                        {newOrderItem.quantity}
                      </p>
                      {newOrderItem.note && (
                        <p>
                          備註：
                          {newOrderItem.note}
                        </p>
                      )}
                    </Stack>
                    <IconButton
                      onClick={() =>
                        setNewOrderItemList(
                          currentNewOrderItemList =>
                            arrayRemoveElementByIndex(
                              currentNewOrderItemList,
                              index
                            )
                        )
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Card>
                )
              )}
            </Stack>
            <Divider className="py-2" />
            <Stack direction="row-reverse">
              <Button onClick={handleClose}>
                關閉
              </Button>
              <NewOrderMenuItemOrderButton
                user={user}
                orderId={orderId}
                restaurantId={restaurantId}
                doClear={() => {
                  setNewOrderItemList([])
                  recallEachOrder()
                }}
                newOrderItemList={
                  newOrderItemList
                }
              />
              <Button
                onClick={() =>
                  setNewOrderItemList([])
                }
              >
                CLEAR
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default NewOrderMenuItem
