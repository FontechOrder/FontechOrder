import type { AlertViewType } from '@other-support/types'

export type AlertListManagerStateType = {
  alertList: Array<AlertViewType>
}

export enum ALERT_LIST_STRING {
  ADD_TO_ALERT_LIST = 'ADD_TO_ALERT_LIST',
  REMOVE_FROM_ALERT_LIST = 'REMOVE_FROM_ALERT_LIST',
  CLEAR_ALERT_LIST = 'CLEAR_ALERT_LIST',
}

interface AlertListManagerBaseActionType {
  type: ALERT_LIST_STRING
}

interface AlertListManagerAddToAlertListActionType
  extends AlertListManagerBaseActionType {
  type: ALERT_LIST_STRING.ADD_TO_ALERT_LIST
  newAlert: AlertViewType
}

interface AlertListManagerRemoveFromAlertListActionType
  extends AlertListManagerBaseActionType {
  type: ALERT_LIST_STRING.REMOVE_FROM_ALERT_LIST
  index: number
}

interface AlertListManagerHideAlertListActionType
  extends AlertListManagerBaseActionType {
  type: ALERT_LIST_STRING.CLEAR_ALERT_LIST
}

export type AlertListManagerActionTypes =
  | AlertListManagerAddToAlertListActionType
  | AlertListManagerRemoveFromAlertListActionType
  | AlertListManagerHideAlertListActionType
