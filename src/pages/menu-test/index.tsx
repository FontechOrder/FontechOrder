import React from 'react'
import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'
import FirebaseLoginForm from '@components/FirebaseLoginForm'
import FirebaseLogOutButtonContainer from '@components/FirebaseLogOutButtonContainer'
import MenuManagerView from '@components/MenuManagerView'
import PageContent from '@containers/PageContent'

const MenuTest: React.FC = () => {
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
        <MenuManagerView />
      </PageContent>
    )
  }

  return (
    <PageContent>
      <FirebaseLoginForm />
    </PageContent>
  )
}

export default MenuTest
