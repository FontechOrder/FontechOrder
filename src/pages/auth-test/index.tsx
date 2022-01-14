import React from 'react'
import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'
import FirebaseLoginForm from '@components/FirebaseLoginForm'
import FirebaseLogOutButtonContainer from '@components/FirebaseLogOutButtonContainer'
import CreateOrder from '@components/CreateOrder'

const AuthTest: React.FC = () => {
  const { isFirst, user } = useFirebaseAuth()

  if (isFirst) {
    return (
      <div className="text-white">
        isLoading...
      </div>
    )
  }

  if (user) {
    return (
      <div className="p-4">
        <FirebaseLogOutButtonContainer
          user={user}
        />
        <CreateOrder />
      </div>
    )
  }

  return (
    <div className="p-4">
      <FirebaseLoginForm />
    </div>
  )
}

export default AuthTest
