import type { DatabaseUserInterface } from '@supabase-folder/types'

export type UserManagerStateType = {
  user: DatabaseUserInterface | undefined
}

export enum USER_STRING {
  SAVE_USER = 'SAVE_USER',
  CLEAR_USER = 'CLEAR_USER',
}

interface UserManagerBaseActionType {
  type: USER_STRING
}

interface UserManagerShowUserActionType
  extends UserManagerBaseActionType {
  type: USER_STRING.SAVE_USER
  user: DatabaseUserInterface
}

interface UserManagerHideUserActionType
  extends UserManagerBaseActionType {
  type: USER_STRING.CLEAR_USER
}

export type UserManagerActionTypes =
  | UserManagerShowUserActionType
  | UserManagerHideUserActionType
