import React from 'react'

import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import {
  updateUser,
  removeUser,
  initUserManager,
} from '@redux-folder/reducers/userManagerState/action'

import { getDocumentData } from '@other-support/Consts'
import { canWriteFireStoreEmails } from '@other-support/Data'

export const useUserManager = () => {
  const dispatch = useDispatch()

  const { isInit, userDoc } = useSelector(
    state => ({
      isInit: state.userManagerState.isInit,
      userDoc: state.userManagerState.userDoc,
    }),
    shallowEqual
  )

  const doUpdateUser = (
    userDoc: DocumentDataSnapshot
  ) => {
    dispatch(updateUser(userDoc))
  }

  const doRemoveUser = () => {
    dispatch(removeUser())
  }

  const doInitUserManager = () => {
    dispatch(initUserManager())
  }

  const user = React.useMemo(() => {
    return getDocumentData(userDoc)
  }, [userDoc])

  const isCanWriteFireStoreEmailUser =
    React.useMemo(() => {
      const email = user?.email
      if (!email) {
        return false
      }

      return canWriteFireStoreEmails.includes(
        email
      )
    }, [user])

  return {
    doUpdateUser,
    doRemoveUser,
    doInitUserManager,
    isInit,
    userDoc,
    user,
    isCanWriteFireStoreEmailUser,
  }
}

export default useUserManager
