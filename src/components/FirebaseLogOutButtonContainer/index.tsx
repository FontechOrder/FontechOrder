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
    <div>
      <div> email: {user.email} </div>
      <CustomButton onClick={() => buttonClick()}>
        清除資料
      </CustomButton>
    </div>
  )
}

export default FirebaseLogOutButtonContainer
