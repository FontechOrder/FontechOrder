import {
  UserManagerStateType,
  USER_STRING,
  UserManagerActionTypes,
} from '@redux-folder/reducers/userManagerState/type'

import { switchCaseTState } from '@other-support/Consts'

const initUserManagerState: UserManagerStateType =
  {
    isInit: true,
    userDoc: undefined,
  }

const userManagerState = (
  state = initUserManagerState,
  action: UserManagerActionTypes
): UserManagerStateType => {
  const reducer = switchCaseTState<
    UserManagerActionTypes,
    UserManagerStateType
  >({
    [USER_STRING.UPDATE_USER]:
      updateUserAction => ({
        isInit: false,
        userDoc: updateUserAction.userDoc,
      }),
    [USER_STRING.REMOVE_USER]: () => ({
      isInit: false,
      userDoc: undefined,
    }),
    [USER_STRING.INIT]: () =>
      initUserManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default userManagerState
