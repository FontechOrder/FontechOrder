import {
  OrderListManagerStateType,
  ORDER_LIST_STRING,
  OrderListManagerActionTypes,
} from '@redux-folder/reducers/orderListManagerState/type'

import { switchCaseTState } from '@other-support/consts'

const initOrderListManagerState: OrderListManagerStateType =
  {
    isInit: true,
    isLoading: false,
    orderList: [],
  }

const orderListManagerState = (
  state = initOrderListManagerState,
  action: OrderListManagerActionTypes
): OrderListManagerStateType => {
  const reducer = switchCaseTState<
    OrderListManagerActionTypes,
    OrderListManagerStateType
  >({
    [ORDER_LIST_STRING.SAVE_ORDER_LIST]:
      eachAction => ({
        ...state,
        isInit: false,
        orderList: eachAction.orderList,
      }),
    [ORDER_LIST_STRING.SET_IS_LOADING]:
      eachAction => ({
        ...state,
        isInit: false,
        isLoading: eachAction.isLoading,
      }),
    [ORDER_LIST_STRING.CLEAR]: () =>
      initOrderListManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default orderListManagerState
