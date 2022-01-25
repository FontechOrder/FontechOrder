import type { DocumentDataSnapshot } from '@firebase-folder/types'

export type UserManagerStateType = {
  isInit: boolean
  userDoc: DocumentDataSnapshot | undefined
}

export enum USER_STRING {
  UPDATE_USER = 'UPDATE_USER',
  REMOVE_USER = 'REMOVE_USER',
  INIT = 'INIT',
}

interface UserManagerBaseActionType {
  type: USER_STRING
}

interface UserManagerUpdateUserActionType
  extends UserManagerBaseActionType {
  type: USER_STRING.UPDATE_USER
  userDoc: DocumentDataSnapshot
}

interface UserManagerRemoveUserActionType
  extends UserManagerBaseActionType {
  type: USER_STRING.REMOVE_USER
}

interface UserManagerInitUserActionType
  extends UserManagerBaseActionType {
  type: USER_STRING.INIT
}

export type UserManagerActionTypes =
  | UserManagerUpdateUserActionType
  | UserManagerRemoveUserActionType
  | UserManagerInitUserActionType
