import React from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'

import type {
  EachOrderItemDataInterface,
  DatabaseUserInterface,
} from '@supabase-folder/types'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import useEachOrderItemList from '@supabase-folder/hooks/useEachOrderItemList'

const combineOrderItemNameType = (
  orderItem: EachOrderItemDataInterface
) =>
  orderItem.item_type
    ? `${orderItem.item_type}.${orderItem.item_name}`
    : orderItem.item_name

interface AccordionOrderItemUnit {
  title: string
  cost: number
  quantity: number
  totalCost: number
  user: DatabaseUserInterface
}

interface AccordionOrderItem
  extends AccordionOrderItemUnit {
  id: string
  items: Array<AccordionOrderItemUnit>
}

interface OrderItemListProps {
  orderId: number
  restaurantId: number
}

const OrderItemList: React.FC<
  OrderItemListProps
> = ({ orderId, restaurantId }) => {
  const [sortByUser, setSortByUser] =
    React.useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortByUser(event.target.checked)
  }

  const { orderItemList } = useEachOrderItemList({
    orderId,
    restaurantId,
  })

  const totalCost = React.useMemo(
    () =>
      orderItemList.reduce(
        (result, each) =>
          result + each.cost * each.quantity,
        0
      ),
    [orderItemList]
  )

  const accordionOrderItemList =
    React.useMemo(() => {
      return orderItemList.reduce(
        (result, each) => {
          const eachAccordion = {
            cost: each.cost,
            quantity: each.quantity,
            totalCost: each.cost * each.quantity,
            user: each.user,
          }

          const accordionTitle = sortByUser
            ? each.user.name
            : `${
                eachAccordion.cost
              } ${combineOrderItemNameType(each)}`

          const accordionItemTitle = sortByUser
            ? `${
                eachAccordion.cost
              } ${combineOrderItemNameType(each)}`
            : each.user.name

          const index = result.findIndex(
            orderItem =>
              orderItem.title === accordionTitle
          )

          if (index > -1) {
            const findOrderItem = result[index]

            findOrderItem.items.push({
              ...eachAccordion,
              title: accordionItemTitle,
            })
            findOrderItem.quantity +=
              eachAccordion.quantity
            findOrderItem.totalCost +=
              eachAccordion.totalCost

            result[index] = findOrderItem

            return result
          }

          return [
            ...result,
            {
              id: accordionTitle,
              ...eachAccordion,
              title: accordionTitle,
              items: [
                {
                  title: accordionItemTitle,
                  ...eachAccordion,
                },
              ],
            },
          ]
        },
        Array<AccordionOrderItem>()
      )
    }, [sortByUser, orderItemList])

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <FormControlLabel
          control={
            <Switch
              checked={sortByUser}
              onChange={handleChange}
              inputProps={{
                'aria-label':
                  'sort-by-user-switch',
              }}
            />
          }
          label="By User"
        />

        <Box className="text-right">
          Total Cost: {totalCost}
        </Box>
      </Stack>

      {accordionOrderItemList.map((each, idx) => (
        <Accordion
          key={
            sortByUser
              ? `by-user-accordion-order-item-${each.id}-${idx}`
              : `accordion-order-item-${each.id}-${idx}`
          }
        >
          <AccordionSummary
            className="flex-row-reverse"
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
          >
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography>
                  {each.title}
                </Typography>
              </Grid>
              <Grid
                className="flex flex-wrap items-center justify-end"
                item
                xs={2}
              >
                <Typography>
                  {each.quantity}
                </Typography>
              </Grid>
              <Grid
                className="flex flex-wrap items-center justify-end"
                item
                xs={2}
              >
                <Typography>
                  {each.totalCost}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            {each.items.map((item, index) => (
              <Grid
                key={`accordion-order-item-items-${item.title}-${index}`}
                className="mr-10"
                container
                spacing={1}
              >
                <Grid item xs={8}>
                  {sortByUser ? (
                    <Typography>
                      {item.title}
                    </Typography>
                  ) : (
                    <Tooltip
                      title={`${item.user.name} (${item.user.email})`}
                      placement="left"
                    >
                      <Typography>
                        {item.title}
                      </Typography>
                    </Tooltip>
                  )}
                </Grid>
                <Grid
                  className="flex flex-wrap items-center justify-end"
                  item
                  xs={2}
                >
                  <Typography>
                    {item.quantity}
                  </Typography>
                </Grid>
                <Grid
                  className="flex flex-wrap items-center justify-end"
                  item
                  xs={2}
                >
                  <Typography>
                    {item.totalCost}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default OrderItemList
