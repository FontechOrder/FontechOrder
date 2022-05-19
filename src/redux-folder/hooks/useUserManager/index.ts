import React from 'react'
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import type { DatabaseUserInterface } from '@supabase-folder/types'

import {
  saveUser,
  clearUser,
} from '@redux-folder/reducers/userManagerState/action'

export const useUserManager = () => {
  const dispatch = useDispatch()

  const { user } = useSelector(
    state => ({
      user: state.userManagerState.user,
    }),
    shallowEqual
  )

  const doSaveUser = React.useCallback(
    (user: DatabaseUserInterface) => {
      dispatch(saveUser(user))
    },
    [dispatch]
  )

  const doClearUser = React.useCallback(() => {
    dispatch(clearUser())
  }, [dispatch])

  return {
    doSaveUser,
    doClearUser,
    user,
  }
}

export default useUserManager
