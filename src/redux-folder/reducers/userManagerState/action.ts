import {
  USER_STRING,
  UserManagerActionTypes,
} from '@redux-folder/reducers/userManagerState/type'

import type { DatabaseUserType } from '@supabase-folder/types'

export const saveUser = (
  user: DatabaseUserType
): UserManagerActionTypes =>
  <UserManagerActionTypes>{
    type: USER_STRING.SAVE_USER,
    user,
  }

export const clearUser =
  (): UserManagerActionTypes =>
    <UserManagerActionTypes>{
      type: USER_STRING.CLEAR_USER,
    }
