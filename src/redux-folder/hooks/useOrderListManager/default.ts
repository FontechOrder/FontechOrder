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
    orderList,
  }
}

export default useOrderListManagerDefault
