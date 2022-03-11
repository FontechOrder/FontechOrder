import React from 'react'
import CustomButton from '@components/CustomButton'

import logInWithGoogleThenGetUserPromise from '@firebase-folder/functions/logInWithGoogleThenGetUserPromise'

import useUserManager from '@redux-folder/hooks/useUserManager'

import { sleep } from '@other-support/Consts'

const GoogleLoginButton = () => {
  const { doInitUserManager } = useUserManager()

  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString, setErrorString] =
    React.useState('')

  const asyncButtonWithCallbackClick =
    React.useCallback(
      (
        callback: () => void = () => undefined
      ) => {
        const asyncButtonClick = async () => {
          try {
            const user =
              await logInWithGoogleThenGetUserPromise()

            if (!user) {
              throw new Error('user not found')
            }

            doInitUserManager()

            callback()
          } catch (error) {
            setErrorString('Login failed')
            await sleep(2000)

            callback()
          }
        }
        asyncButtonClick()
      },
      [doInitUserManager]
    )

  const buttonClick = React.useCallback(() => {
    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setErrorString('')

    asyncButtonWithCallbackClick(() => {
      setIsSubmitting(false)
      setErrorString('')
    })
  }, [isSubmitting, asyncButtonWithCallbackClick])

  const buttonText = React.useMemo(() => {
    if (errorString) {
      return errorString
    }
    if (isSubmitting) {
      return 'is Submitting...'
    }

    return 'G'
  }, [isSubmitting, errorString])

  return (
    <CustomButton
      disabled={
        isSubmitting || errorString !== ''
      }
      className="flex-0 py-2 px-2 md:min-w-[64px]"
      onClick={() => buttonClick()}
    >
      {buttonText}
    </CustomButton>
  )
}

export default GoogleLoginButton
