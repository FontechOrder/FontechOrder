import React from 'react'

import fetchUserWithEmail from '@supabase-folder/functions/fetchUserWithEmail'

import createUsers from '@supabase-folder/functions/createUsers'

import type { DatabaseUserType } from '@supabase-folder/types'

import useAuthUserStateChange from '@supabase-folder/hooks/useAuthUserStateChange'
import useUserManager from '@redux-folder/hooks/useUserManager'
import useLoadingResultErrorWithoutEffect from '@other-support/hooks/useLoadingResultError/withoutEffect'
import useLoadingResultError from '@other-support/hooks/useLoadingResultError'

import { convertAuthUserToDatabaseUser } from '@other-support/consts'

import type { EmailPasswordObject } from '@other-support/types'

const useAuthStateChange = () => {
  const { doSaveUser, doClearUser, user } =
    useUserManager()

  const {
    doAuthUserSignIn,
    doAuthUserSignOut,
    authUser,
  } = useAuthUserStateChange()

  const [needUpdate, setNeedUpdate] =
    React.useState(false)

  const createdAsyncFetchUserWithEmail =
    React.useCallback(() => {
      return async (): Promise<DatabaseUserType> => {
        const user = await fetchUserWithEmail(
          authUser?.email
        )

        return user
      }
    }, [authUser])

  const {
    isLoading,
    error,
    result,
    recall,
    fetchData,
  } = useLoadingResultErrorWithoutEffect({
    asyncCallback:
      createdAsyncFetchUserWithEmail(),
  })

  const createdAsyncCreateUser =
    React.useCallback(() => {
      return async (): Promise<DatabaseUserType> => {
        const convertedUser =
          convertAuthUserToDatabaseUser(authUser)
        if (!convertedUser) {
          throw new Error('Invalid User')
        }

        const users = await createUsers([
          convertedUser,
        ])

        const updatedUser = users[0]

        if (!updatedUser) {
          throw new Error('Invalid User')
        }

        return updatedUser
      }
    }, [authUser])

  const {
    // isLoading: createdUserIsLoading,
    // error: createdUserError,
    // result: createdUserResult,
    recall: createdUserRecall,
    // fetchData: createdUserFetchData,
  } = useLoadingResultError({
    asyncCallback: createdAsyncCreateUser(),
  })

  const doSignIn = React.useCallback(
    ({
      email,
      password,
    }: EmailPasswordObject) => {
      if (isLoading) {
        return
      }

      doAuthUserSignIn({
        email,
        password,
      })
    },
    [isLoading, doAuthUserSignIn]
  )

  const doSignOut = React.useCallback(() => {
    if (isLoading) {
      return
    }
    doAuthUserSignOut()
  }, [isLoading, doAuthUserSignOut])

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    fetchData({
      stopByLoadingCallBack: () =>
        setNeedUpdate(false),
    })
  }, [isLoading, fetchData])

  React.useEffect(() => {
    if (!needUpdate) {
      return
    }

    const result = recall()
    if (result) {
      setNeedUpdate(false)
    }
  }, [needUpdate, recall])

  React.useEffect(() => {
    if (error) {
      doClearUser()
      return
    }

    if (!result) {
      doClearUser()
      return
    }

    doSaveUser(result)
  }, [error, result, doClearUser, doSaveUser])

  React.useEffect(() => {
    setNeedUpdate(true)
  }, [authUser])

  return {
    isLoading,

    doSignIn,
    doSignOut,
    authUser,

    user,

    createUser: createdUserRecall,
  }
}

export default useAuthStateChange
