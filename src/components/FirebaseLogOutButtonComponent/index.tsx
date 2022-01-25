import React from 'react'
import logOut from '@firebase-folder/functions/logout'

import type { User } from '@firebase/auth'

import CustomButton from '@components/CustomButton'

import useUserManager from '@redux-folder/hooks/useUserManager'

interface FirebaseLogOutButtonComponentProps {
  firebaseAuthUser: User
}

const FirebaseLogOutButtonComponent = ({
  firebaseAuthUser,
}: FirebaseLogOutButtonComponentProps) => {
  const { doRemoveUser } = useUserManager()

  const buttonClick = async () => {
    await logOut()
    doRemoveUser()
  }

  return (
    <div className="flex flex-row items-end">
      <div className="flex-1 whitespace-pre-wrap break-all pb-2 pr-4 text-right text-white">
        {firebaseAuthUser.email}
      </div>
      <CustomButton
        className="flex-0 py-2 px-2 md:min-w-[64px]"
        onClick={() => buttonClick()}
      >
        登出
      </CustomButton>
    </div>
  )
}

export default FirebaseLogOutButtonComponent
