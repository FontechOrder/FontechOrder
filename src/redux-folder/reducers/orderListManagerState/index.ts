import {
  OrderListManagerStateType,
  ORDER_LIST_STRING,
  OrderListManagerActionTypes,
} from '@redux-folder/reducers/orderListManagerState/type'

import { switchCaseTState } from '@other-support/consts'

const initOrderListManagerState: OrderListManagerStateType =
  {
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
        orderList: eachAction.orderList,
      }),
    [ORDER_LIST_STRING.CLEAR_ORDER_LIST]: () =>
      initOrderListManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default orderListManagerState
