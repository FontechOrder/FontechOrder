import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import type { DatabaseUserType } from '@supabase-folder/types'

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

  const doSaveUser = (user: DatabaseUserType) => {
    dispatch(saveUser(user))
  }

  const doClearUser = () => {
    dispatch(clearUser())
  }

  return {
    doSaveUser,
    doClearUser,
    user,
  }
}

export default useUserManager
