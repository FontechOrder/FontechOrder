import type { DatabaseOrderInterface } from '@supabase-folder/types'

export type OrderListManagerStateType = {
  orderList: Array<DatabaseOrderInterface>
}

export enum ORDER_LIST_STRING {
  SAVE_ORDER_LIST = 'SAVE_ORDER_LIST',
  CLEAR_ORDER_LIST = 'CLEAR_ORDER_LIST',
}

interface OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING
}

interface OrderListManagerShowOrderListActionType
  extends OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING.SAVE_ORDER_LIST
  orderList: Array<DatabaseOrderInterface>
}

interface OrderListManagerHideOrderListActionType
  extends OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING.CLEAR_ORDER_LIST
}

export type OrderListManagerActionTypes =
  | OrderListManagerShowOrderListActionType
  | OrderListManagerHideOrderListActionType
