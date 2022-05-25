import {
  useSelector,
  shallowEqual,
} from 'react-redux'

const useOrderListManagerDefault = () => {
  const { isInit, isLoading, orderList } =
    useSelector(
      state => state.orderListManagerState,
      shallowEqual
    )

  return {
    isInit,
    isLoading,
    orderList,
  }
}

export default useOrderListManagerDefault
