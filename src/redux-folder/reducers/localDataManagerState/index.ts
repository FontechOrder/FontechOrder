import {
  LocalDataManagerStateType,
  LOCALDATA_STRING,
  LocalDataManagerActionTypes,
} from '@redux-folder/reducers/localDataManagerState/type'

import { switchCaseTState } from '@other-support/consts'

const initLocalDataManagerState: LocalDataManagerStateType =
  {
    data: undefined,
  }

const localDataManagerState = (
  state = initLocalDataManagerState,
  action: LocalDataManagerActionTypes
): LocalDataManagerStateType => {
  const reducer = switchCaseTState<
    LocalDataManagerActionTypes,
    LocalDataManagerStateType
  >({
    [LOCALDATA_STRING.SAVE_LOCALDATA]:
      eachAction => eachAction.data,
    [LOCALDATA_STRING.CLEAR_LOCALDATA]: () =>
      initLocalDataManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default localDataManagerState
