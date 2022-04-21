import {
  UserManagerStateType,
  USER_STRING,
  UserManagerActionTypes,
} from '@redux-folder/reducers/userManagerState/type'

import { switchCaseTState } from '@other-support/consts'

const initUserManagerState: UserManagerStateType =
  {
    user: undefined,
  }

const userManagerState = (
  state = initUserManagerState,
  action: UserManagerActionTypes
): UserManagerStateType => {
  const reducer = switchCaseTState<
    UserManagerActionTypes,
    UserManagerStateType
  >({
    [USER_STRING.SAVE_USER]: eachAction => ({
      user: eachAction.user,
    }),
    [USER_STRING.CLEAR_USER]: () =>
      initUserManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default userManagerState
