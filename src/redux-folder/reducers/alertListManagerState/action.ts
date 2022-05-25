import {
  ALERT_LIST_STRING,
  AlertListManagerActionTypes,
} from '@redux-folder/reducers/alertListManagerState/type'

import type { AlertViewType } from '@other-support/types'

export const addToAlertList = (
  newAlert: AlertViewType
): AlertListManagerActionTypes =>
  <AlertListManagerActionTypes>{
    type: ALERT_LIST_STRING.ADD_TO_ALERT_LIST,
    newAlert,
  }

export const removeFromAlertList = (
  index: number
): AlertListManagerActionTypes =>
  <AlertListManagerActionTypes>{
    type: ALERT_LIST_STRING.REMOVE_FROM_ALERT_LIST,
    index,
  }

export const clearAlertList =
  (): AlertListManagerActionTypes =>
    <AlertListManagerActionTypes>{
      type: ALERT_LIST_STRING.CLEAR_ALERT_LIST,
    }
