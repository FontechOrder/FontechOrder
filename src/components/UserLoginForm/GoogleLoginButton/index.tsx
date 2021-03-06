import React from 'react'
import { supabase } from '@supabase-folder/client'

import { Button } from '@mui/material'

const signInWithGoogle = async () => {
  await supabase.auth.signIn(
    {
      provider: 'google',
    },
    {
      redirectTo:
        'https://fontechorder.github.io/FontechOrder',
    }
  )
}

const GoogleLoginButton = () => {
  return (
    <Button
      variant="contained"
      onClick={signInWithGoogle}
    >
      GOOGLE LOGIN
    </Button>
  )
}

export default GoogleLoginButton
