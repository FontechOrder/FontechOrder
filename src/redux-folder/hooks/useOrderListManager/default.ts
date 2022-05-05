// import React from 'react'
import {
  useSelector,
  shallowEqual,
} from 'react-redux'

const useOrderListManagerDefault = () => {
  const { orderList } = useSelector(
    state => ({
      orderList:
        state.orderListManagerState.orderList,
    }),
    shallowEqual
  )

  return {
    orders: orderList,
  }
}

export default useOrderListManagerDefault
