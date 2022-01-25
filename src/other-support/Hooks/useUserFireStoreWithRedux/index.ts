import React from 'react'

import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'
import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

import useUserManager from '@redux-folder/hooks/useUserManager'
import {
  setUserFireStore,
  getFontechEmail,
} from '@other-support/Consts'

import useLoadingHandler from '@other-support/Hooks/useLoadingHandler'

const useUserFireStoreWithRedux = () => {
  const { isFirst, firebaseAuthUser } =
    useFirebaseAuth()

  const {
    isLoading,
    setIsLoading,
    isLoadingHandler,
  } = useLoadingHandler()

  const {
    doUpdateUser,
    doRemoveUser,
    isInit: isInitInRedux,
    userDoc,
  } = useUserManager()

  const getUserDocFromUserWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        const asyncGetUserDocFromUser =
          async () => {
            try {
              const fontechEmail =
                getFontechEmail(
                  firebaseAuthUser?.email
                )

              if (!fontechEmail) {
                throw new Error(
                  'not fontech email'
                )
              }

              const fireStoreDoc =
                await getFireStoreDocPromise({
                  path: 'users/' + fontechEmail,
                })

              doUpdateUser(fireStoreDoc)
            } catch {
              doRemoveUser()
            }

            callback()
          }

        asyncGetUserDocFromUser()
      },
      [
        firebaseAuthUser,
        doUpdateUser,
        doRemoveUser,
      ]
    )

  const getUserDocFromUser =
    React.useCallback(() => {
      // console.log('getUserDocFromUser')
      isLoadingHandler(
        getUserDocFromUserWithCallBack
      )
    }, [
      isLoadingHandler,
      getUserDocFromUserWithCallBack,
    ])

  const isInit = React.useMemo(() => {
    return isFirst || isInitInRedux
  }, [isFirst, isInitInRedux])

  React.useEffect(() => {
    if (!isInit) {
      return
    }

    getUserDocFromUser()
  }, [isInit, getUserDocFromUser])

  const createFirestoreUserWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        const asyncCreateFirestoreUser =
          async () => {
            try {
              const result =
                await setUserFireStore(
                  firebaseAuthUser?.email
                )

              if (!result) {
                throw new Error(
                  'setUserFireStoreError'
                )
              }

              await new Promise<void>(resolve => {
                getUserDocFromUserWithCallBack(
                  () => resolve()
                )
              })
            } catch {}

            callback()
          }

        asyncCreateFirestoreUser()
      },
      [
        firebaseAuthUser,
        getUserDocFromUserWithCallBack,
      ]
    )

  const createFirestoreUser =
    React.useCallback(() => {
      isLoadingHandler(
        createFirestoreUserWithCallBack
      )
    }, [
      isLoadingHandler,
      createFirestoreUserWithCallBack,
    ])

  return {
    isInit,
    isLoading,
    setIsLoading,
    createFirestoreUser,
    getUserDocFromUser,
    userDoc,
    firebaseAuthUser,
  }
}

export default useUserFireStoreWithRedux
