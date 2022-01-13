import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'

import { firebaseAuth } from '@firebase-folder/configure'

const useFirebaseAuth = () => {
  const [isFirst, setIsFirst] =
    React.useState<boolean>(true)

  const [user, setUser] =
    React.useState<User | null>(null)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      user => {
        setUser(user)
        setIsFirst(false)
      }
    )

    return () => {
      unsubscribe()
    }
  }, [])

  return {
    isFirst,
    user,
  }
}

export default useFirebaseAuth
