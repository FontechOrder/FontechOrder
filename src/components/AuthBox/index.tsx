import React from 'react'

import useUserManager from '@redux-folder/hooks/useUserManager'

const AuthBox = () => {
  const { user } = useUserManager()

  if (user) {
    return (
      <div>
        <div>name: {user.name}</div>
        <div>eamil: {user.email}</div>
      </div>
    )
  }

  return <div>AuthBox</div>
}

export default AuthBox
