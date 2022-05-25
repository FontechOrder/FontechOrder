import type { DatabaseOrderInterface } from '@supabase-folder/types'

export type OrderListManagerStateType = {
  isInit: boolean
  isLoading: boolean
  orderList: Array<DatabaseOrderInterface>
}

export enum ORDER_LIST_STRING {
  SAVE_ORDER_LIST = 'SAVE_ORDER_LIST',
  SET_IS_LOADING = 'SET_IS_INIT',
  CLEAR = 'CLEAR',
}

interface OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING
}

interface OrderListManagerShowOrderListActionType
  extends OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING.SAVE_ORDER_LIST
  orderList: Array<DatabaseOrderInterface>
}

interface OrderListManagerSetIsLoadingActionType
  extends OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING.SET_IS_LOADING
  isLoading: boolean
}

interface OrderListManagerHideOrderListActionType
  extends OrderListManagerBaseActionType {
  type: ORDER_LIST_STRING.CLEAR
}

export type OrderListManagerActionTypes =
  | OrderListManagerShowOrderListActionType
  | OrderListManagerSetIsLoadingActionType
  | OrderListManagerHideOrderListActionType
