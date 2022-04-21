import { supabase } from '@supabase-folder/client'
import type { User } from '@supabase/supabase-js'

const googleSignIn = async (
  redirectTo?: string
): Promise<User> => {
  const { error: signOutError } =
    await supabase.auth.signOut()

  if (signOutError) {
    throw signOutError
  }

  const {
    user,
    // session,
    error,
  } = await supabase.auth.signIn(
    {
      provider: 'google',
    },
    {
      redirectTo,
    }
  )

  // console.log('googleSignIn user:', user)
  // console.log('googleSignIn session:', session)
  // console.log('googleSignIn error:', error)

  if (error) {
    throw error
  }

  if (!user) {
    throw new Error('no restaurant list')
  }

  return user
}

export default googleSignIn
