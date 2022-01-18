import React from 'react'
import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'
import FirebaseLoginForm from '@components/FirebaseLoginForm'
import FirebaseLogOutButtonContainer from '@components/FirebaseLogOutButtonContainer'
import CreateOrder from '@components/CreateOrder'
import PageContent from '@containers/PageContent'

const AuthTest: React.FC = () => {
  const { isFirst, user } = useFirebaseAuth()

  if (isFirst) {
    return (
      <PageContent>
        <div className="text-white">
          isLoading...
        </div>
      </PageContent>
    )
  }

  if (user) {
    return (
      <PageContent>
        <FirebaseLogOutButtonContainer
          user={user}
        />
        <CreateOrder />
      </PageContent>
    )
  }

  return (
    <PageContent>
      <FirebaseLoginForm />
    </PageContent>
  )
}

export default AuthTest
