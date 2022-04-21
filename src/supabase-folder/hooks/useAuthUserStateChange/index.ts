import React from 'react'

import type { User } from '@supabase/supabase-js'

import { supabase } from '@supabase-folder/client'
import authUserSignIn from '@supabase-folder/functions/authUserSignIn'

import type { EmailPasswordObject } from '@other-support/types'

const useAuthUserStateChange = () => {
  const [authUser, setAuthUser] = React.useState<
    User | undefined
  >(undefined)

  const doAuthUserSignIn = React.useCallback(
    ({
      email,
      password,
    }: EmailPasswordObject) => {
      const asyncSignIn = async ({
        email,
        password,
      }: EmailPasswordObject) => {
        try {
          const user = await authUserSignIn({
            email,
            password,
          })
          setAuthUser(user)
        } catch {}
      }
      asyncSignIn({ email, password })
    },
    []
  )

  const doAuthUserSignOut =
    React.useCallback(() => {
      const asyncSignOut = async () => {
        const { error } =
          await supabase.auth.signOut()

        if (error) {
          // console.log(error)
          return false
        }

        // console.log('asyncSignOut')
        setAuthUser(undefined)

        return true
      }
      asyncSignOut()
    }, [])
  React.useEffect(() => {
    const user = supabase.auth.user()

    setAuthUser(user || undefined)
  }, [])

  React.useEffect(() => {
    const { data: authListener } =
      supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (session?.user) {
            setAuthUser(session.user)
          }
        }
      )

    return () => {
      if (authListener) authListener.unsubscribe()
    }
  }, [])

  return {
    doAuthUserSignIn,
    doAuthUserSignOut,

    authUser,
  }
}

export default useAuthUserStateChange
