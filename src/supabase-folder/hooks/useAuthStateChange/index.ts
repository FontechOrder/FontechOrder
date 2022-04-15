import React from 'react'
import { supabase } from '@supabase-folder/client'
import type { User } from '@supabase/supabase-js'

// import useUserManager from '@redux-folder/hooks/useUserManager'
// import fetchUserWithEmail from '@supabase-folder/functions/fetchUserWithEmail'

// import createUsers from '@supabase-folder/functions/createUsers'

const useAuthStateChange = () => {
  const [authUser, setAuthUser] = React.useState<
    User | undefined
  >(undefined)

  // React.useEffect(() => {
  //   const asyncSignIn = async () => {
  //     const { user, session, error } =
  //       await supabase.auth.signIn({
  //         email: 'jason@fontech.com.tw',
  //         password: 'Fontech123',
  //       })

  //     if (error) {
  //       console.log(error)
  //     }

  //     console.log('asyncSignIn user: ', user)
  //   }

  //   asyncSignIn()
  // }, [])

  const doSaveUserWithAuthUser = (
    authUser: User
  ) => {
    // const newUser = {
    //   id: authUser.id,
    //   name: authUser.id,
    //   email?: authUser.id,
    //   type?: authUser.id,
    // }
    console.log(
      'doSaveUserWithAuthUser authUser: ',
      authUser
    )
  }

  const doSignIn = () => {
    const asyncSignIn = async () => {
      const { user, error } =
        await supabase.auth.signIn({
          email: 'jason@fontech.com.tw',
          password: 'Fontech123',
        })

      if (error) {
        console.log(error)
        return
      }

      if (!user) {
        console.log(error)
        return
      }

      console.log('asyncSignIn user: ', user)
      setAuthUser(user)
      doSaveUserWithAuthUser(user)
    }

    asyncSignIn()
  }

  // React.useEffect(() => {
  //   const asyncsignUp = async () => {
  //     const { user, session, error } =
  //       await supabase.auth.signUp({
  //         email: 'test@fontech.com.tw',
  //         password: 'Fontech123',
  //       })

  //     if (error) {
  //       console.log(error)
  //     }

  //     console.log('signUp user: ', user)
  //   }

  //   asyncsignUp()
  // }, [])

  // React.useEffect(() => {
  //   const asyncSignOut = async () => {
  //     const { error } =
  //       await supabase.auth.signOut()
  //     if (error) {
  //       console.log(error)
  //     }

  //     console.log('asyncSignOut')
  //   }

  //   asyncSignOut()
  // }, [])

  const doSignOut = () => {
    const asyncSignOut = async () => {
      const { error } =
        await supabase.auth.signOut()

      if (error) {
        console.log(error)
      }

      console.log('asyncSignOut')
    }

    asyncSignOut()
  }

  // React.useEffect(() => {
  //   const user = supabase.auth.user()
  //   console.log('user: ', user)
  // }, [])

  React.useEffect(() => {
    const { data: authListener } =
      supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log(
            'onAuthStateChange event: ',
            event
          )
          console.log(
            'onAuthStateChange session: ',
            session
          )

          // if (session) {
          //   console.log(
          //     'onAuthStateChange user: ',
          //     session.user
          //   )
          // }
          if (session?.user) {
            setAuthUser(session.user)
          }
        }
      )

    return () => {
      if (authListener) authListener.unsubscribe()
    }
  }, [])

  const user = React.useMemo(() => {
    return authUser
  }, [authUser])

  return {
    doSignIn,
    doSignOut,
    user,
  }
}

export default useAuthStateChange
