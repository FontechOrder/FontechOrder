import {
  ORDER_LIST_STRING,
  OrderListManagerActionTypes,
} from '@redux-folder/reducers/orderListManagerState/type'

import type { DatabaseOrderInterface } from '@supabase-folder/types'

export const saveOrderList = (
  orderList: Array<DatabaseOrderInterface>
): OrderListManagerActionTypes =>
  <OrderListManagerActionTypes>{
    type: ORDER_LIST_STRING.SAVE_ORDER_LIST,
    orderList,
  }

export const setIsLoading = (
  isLoading: boolean
): OrderListManagerActionTypes =>
  <OrderListManagerActionTypes>{
    type: ORDER_LIST_STRING.SET_IS_LOADING,
    isLoading,
  }

export const clearOrderListManager =
  (): OrderListManagerActionTypes =>
    <OrderListManagerActionTypes>{
      type: ORDER_LIST_STRING.CLEAR,
    }
