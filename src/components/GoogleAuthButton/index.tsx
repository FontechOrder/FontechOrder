import React from 'react'
import { IconButton } from '@mui/material'

import googleSignIn from '@supabase-folder/functions/googleSignIn'
import GoogleIcon from '@mui/icons-material/Google'

const GoogleAuthButton = () => {
  return (
    <IconButton
      aria-label="google-icon"
      onClick={() => {
        googleSignIn()
      }}
    >
      <GoogleIcon />
    </IconButton>
  )
}

export default GoogleAuthButton
