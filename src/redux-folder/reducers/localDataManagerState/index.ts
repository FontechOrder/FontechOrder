import {
  LocalDataManagerStateType,
  LOCALDATA_STRING,
  LocalDataManagerActionTypes,
} from '@redux-folder/types/localDataManagerType'

import { switchCaseTState } from '@other-support/Consts'

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
