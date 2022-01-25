import {
  USER_STRING,
  UserManagerActionTypes,
} from '@redux-folder/reducers/userManagerState/type'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

export const updateUser = (
  userDoc: DocumentDataSnapshot
): UserManagerActionTypes =>
  <UserManagerActionTypes>{
    type: USER_STRING.UPDATE_USER,
    userDoc,
  }

export const removeUser =
  (): UserManagerActionTypes =>
    <UserManagerActionTypes>{
      type: USER_STRING.REMOVE_USER,
    }

export const initUserManager =
  (): UserManagerActionTypes =>
    <UserManagerActionTypes>{
      type: USER_STRING.INIT,
    }
