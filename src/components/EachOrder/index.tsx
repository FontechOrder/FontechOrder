import React from 'react'
import classnames from 'classnames'

import { Box, Grid, Button } from '@mui/material'

import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'
import EachOrderOrderItemList from '@components/EachOrder/OrderItemList'

import NewOrderMenuItem from '@components/NewOrderMenuItem'

import useEachOrder from '@supabase-folder/hooks/useEachOrder'

// import { groupBy } from '@other-support/consts'

interface EachOrderProps {
  id: number
}

const EachOrder: React.FC<EachOrderProps> = ({
  id,
}) => {
  const {
    isInit,
    isLoading,
    error,
    eachOrder,
    recall,
  } = useEachOrder(id)

  // console.log(
  //   'EachOrder useOrderDetail eachOrder: ',
  //   eachOrder
  // )

  // const groupedOrderItems = React.useMemo(() => {
  //   if (!orderDetailResult) {
  //     return []
  //   }

  //   return groupBy(
  //     orderDetailResult.orderItems,
  //     order => order.user.id
  //   )
  // }, [orderDetailResult])

  if (isInit) {
    return <div>content init...</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Get Error...</div>
  }

  if (!eachOrder) {
    return <div>Invalid OrderDetail</div>
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
    >
      <Grid item xs={5}>
        <Button
          variant="contained"
          onClick={recall}
        >
          {' '}
          D.C.{' '}
        </Button>
        <Box>order id: {eachOrder.id}</Box>
        <Box>{eachOrder.restaurant.name}</Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          className={classnames(
            'relative aspect-[3/4]',
            !eachOrder.restaurant.image_url &&
              'bg-blue-300'
          )}
        >
          {eachOrder.restaurant.image_url && (
            <ZoomImageWithRelativeParent
              priority
              src={eachOrder.restaurant.image_url}
              alt={eachOrder.restaurant.name}
              layout="fill"
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={10}>
        <NewOrderMenuItem
          orderId={id}
          restaurantId={eachOrder.restaurant.id}
          recallEachOrder={recall}
        />
      </Grid>
      <Grid item xs={10}>
        <EachOrderOrderItemList
          orderId={id}
          restaurantId={eachOrder.restaurant.id}
        />
      </Grid>
    </Grid>
  )
}

export default EachOrder
