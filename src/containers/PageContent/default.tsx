import React from 'react'

import Header from '@components/Header'
import PageContent from '@containers/PageContent'

import useUserFireStoreWithRedux from '@other-support/Hooks/useUserFireStoreWithRedux'

import FirebaseLoginForm from '@components/FirebaseLoginForm'
import CustomButton from '@components/CustomButton'

const PageContentDefault: React.FC = ({
  children,
}) => {
  const {
    isInit,
    isLoading,
    createFirestoreUser,
    firebaseAuthUser,
    userDoc,
  } = useUserFireStoreWithRedux()

  // console.log('PageContentDefault: ')
  // console.log('isInit: ', isInit)
  // console.log('isLoading: ', isLoading)
  // console.log('firebaseAuthUser: ', firebaseAuthUser)
  // console.log('userDoc: ', userDoc)

  const content = React.useMemo(() => {
    if (isInit) {
      return <div>Init...</div>
    }

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (!firebaseAuthUser) {
      return <FirebaseLoginForm />
    }

    if (!userDoc) {
      return (
        <CustomButton
          onClick={createFirestoreUser}
        >
          Will create Firestore User
        </CustomButton>
      )
    }

    return children
  }, [
    children,
    isInit,
    isLoading,
    firebaseAuthUser,
    userDoc,
    createFirestoreUser,
  ])

  return (
    <PageContent
      header={
        <Header
          firebaseAuthUser={firebaseAuthUser}
        />
      }
    >
      <div className="min-h-[50rem] w-full lg:w-[64rem] lg:max-w-[64rem]">
        {content}
      </div>
    </PageContent>
  )
}

export default PageContentDefault
