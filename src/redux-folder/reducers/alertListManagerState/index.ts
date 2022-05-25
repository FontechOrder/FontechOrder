import {
  AlertListManagerStateType,
  ALERT_LIST_STRING,
  AlertListManagerActionTypes,
} from '@redux-folder/reducers/alertListManagerState/type'

import {
  switchCaseTState,
  removeElementInArrayByIndex,
} from '@other-support/consts'

const initAlertListManagerState: AlertListManagerStateType =
  {
    alertList: [],
  }

const alertListManagerState = (
  state = initAlertListManagerState,
  action: AlertListManagerActionTypes
): AlertListManagerStateType => {
  const reducer = switchCaseTState<
    AlertListManagerActionTypes,
    AlertListManagerStateType
  >({
    [ALERT_LIST_STRING.ADD_TO_ALERT_LIST]:
      eachAction => ({
        alertList: [
          ...state.alertList,
          eachAction.newAlert,
        ],
      }),
    [ALERT_LIST_STRING.REMOVE_FROM_ALERT_LIST]:
      eachAction => ({
        alertList: removeElementInArrayByIndex({
          array: state.alertList,
          index: eachAction.index,
          returnOrigin: true,
        }),
      }),
    [ALERT_LIST_STRING.CLEAR_ALERT_LIST]: () =>
      initAlertListManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default alertListManagerState
