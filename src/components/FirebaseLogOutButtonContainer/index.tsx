import React from 'react'
import logOut from '@firebase-folder/functions/logout'

import type { User } from '@firebase/auth'

import CustomButton from '@components/CustomButton'

interface FirebaseLogOutButtonContainerProps {
  user: User
}

const FirebaseLogOutButtonContainer: React.FC<
  FirebaseLogOutButtonContainerProps
> = ({ user }) => {
  const buttonClick = async () => {
    await logOut()
  }

  return (
    <div className="flex flex-row items-center">
      <div className="mr-4 break-all text-white">
        email: {user.email}
      </div>
      <CustomButton
        className="flex-0 min-w-[64px] py-2 px-2"
        onClick={() => buttonClick()}
      >
        登出
      </CustomButton>
    </div>
  )
}

export default FirebaseLogOutButtonContainer
