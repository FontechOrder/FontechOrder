import React from 'react'
import { supabase } from '@supabase-folder/client'
import type { User } from '@supabase/supabase-js'

const useAuthUserStateChange = () => {
  const [authUser, setAuthUser] = React.useState<
    User | undefined
  >(undefined)

  const doSignIn = ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const asyncSignIn = async () => {
      const { user, error } =
        await supabase.auth.signIn({
          email,
          password,
        })

      if (error) {
        // console.log(error)
        return
      }

      if (!user) {
        // console.log(error)
        return
      }

      setAuthUser(user)
    }

    asyncSignIn()
  }

  const doSignOut = () => {
    const asyncSignOut = async () => {
      const { error } =
        await supabase.auth.signOut()

      if (error) {
        // console.log(error)
        return
      }

      // console.log('asyncSignOut')
      setAuthUser(undefined)
    }

    asyncSignOut()
  }

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
    doSignIn,
    doSignOut,
    authUser,
  }
}

export default useAuthUserStateChange
