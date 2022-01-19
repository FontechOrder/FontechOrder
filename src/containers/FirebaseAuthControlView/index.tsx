import React from 'react'
import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'
import FirebaseLogOutButtonContainer from '@components/FirebaseLogOutButtonContainer'
import FirebaseLoginForm from '@components/FirebaseLoginForm'
import PageContent from '@containers/PageContent'

interface FirebaseAuthControlViewProps {
  isLoadingView?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >
  authorizedView: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >
  unauthorizedView?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >
}

const DefaultIsLoadingView = (
  <div className="text-white">isLoading...</div>
)

const FirebaseLoginFormView = (
  <FirebaseLoginForm />
)

const FirebaseAuthControlView: React.FC<
  FirebaseAuthControlViewProps
> = ({
  isLoadingView = DefaultIsLoadingView,
  authorizedView,
  unauthorizedView = FirebaseLoginFormView,
}) => {
  const { isFirst, user } = useFirebaseAuth()

  if (isFirst) {
    return (
      <PageContent>{isLoadingView}</PageContent>
    )
  }

  if (user) {
    return (
      <PageContent>
        <FirebaseLogOutButtonContainer
          user={user}
        />
        {authorizedView}
      </PageContent>
    )
  }

  return (
    <PageContent>{unauthorizedView}</PageContent>
  )
}

export default FirebaseAuthControlView
