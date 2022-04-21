import React from 'react'

import {
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'

import useAuthStateChange from '@supabase-folder/hooks/useAuthStateChange'

import UserLoginForm from '@components/UserLoginForm'

const HeaderRightAuthContent = () => {
  const {
    isLoading,
    doSignIn,
    doSignOut,
    authUser,
    user,
    createUser,
  } = useAuthStateChange()

  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // console.log('Header authUser: ', authUser)

  if (isLoading) {
    return (
      <div className="text-right">Loading...</div>
    )
  }

  if (user) {
    return (
      <Box>
        <Button
          id="basic-button"
          className="float-right"
          aria-controls={
            open ? 'basic-menu' : undefined
          }
          aria-haspopup="true"
          aria-expanded={
            open ? 'true' : undefined
          }
          onClick={handleClick}
        >
          <div className="whitespace-pre-wrap break-all text-right">
            {user.name}
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={() => {
              doSignOut()
              handleClose()
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  if (authUser) {
    return (
      <Box>
        <Button
          id="basic-button"
          className="float-right"
          aria-controls={
            open ? 'basic-menu' : undefined
          }
          aria-haspopup="true"
          aria-expanded={
            open ? 'true' : undefined
          }
          onClick={handleClick}
        >
          Need Become a Member
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={() => {
              // console.log('Be Member!')
              createUser()
              handleClose()
            }}
          >
            Be Member
          </MenuItem>
          <MenuItem
            onClick={() => {
              // console.log('logout')
              doSignOut()
              handleClose()
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  return <UserLoginForm doSignIn={doSignIn} />
}

export default HeaderRightAuthContent
