import type { User } from '@supabase/supabase-js'

import { supabase } from '@supabase-folder/client'

import type { EmailPasswordObject } from '@other-support/types'

const authUserSignIn = async ({
  email,
  password,
}: EmailPasswordObject): Promise<User> => {
  // console.log('authUserSignIn')

  const { user, error } =
    await supabase.auth.signIn({
      email,
      password,
    })

  // console.log('error: ', error)
  // console.log('user: ', user)

  if (error) {
    throw error
  }

  if (!user) {
    throw new Error('Invalid User')
  }

  return user
}

export default authUserSignIn
