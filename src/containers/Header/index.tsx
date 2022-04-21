import React from 'react'
import NextLink from 'next/link'

import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Button from '@mui/material/Button'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import useAuthUserStateChange from '@supabase-folder/hooks/useAuthUserStateChange'

const Header = () => {
  const { doSignIn, doSignOut, authUser } =
    useAuthUserStateChange()

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

  console.log('Header authUser: ', authUser)

  return (
    <div className="flex w-full justify-center bg-blue-400">
      <div className="flex w-full flex-row bg-green-500 p-4 lg:w-[64rem] lg:max-w-[64rem]">
        <div className="relative flex w-full flex-row justify-between overflow-hidden">
          <div className="flex-0 flex flex-row">
            <Box className="p-1">
              <NextLink
                href="/orders"
                as={`${process.env.pathPrefix}/orders`}
                passHref
              >
                <Link>
                  <Tooltip title="Order">
                    <ReceiptLongIcon />
                  </Tooltip>
                </Link>
              </NextLink>
            </Box>

            <Box className="p-1">
              <NextLink
                href="/restaurants"
                as={`${process.env.pathPrefix}/restaurants`}
                passHref
              >
                <Link>
                  <Tooltip title="Restaurant">
                    <MenuBookIcon />
                  </Tooltip>
                </Link>
              </NextLink>
            </Box>
          </div>
          <div className="flex flex-1 justify-end">
            {authUser ? (
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={
                    open
                      ? 'basic-menu'
                      : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={
                    open ? 'true' : undefined
                  }
                  onClick={handleClick}
                >
                  <div className="whitespace-pre-wrap break-all text-right">
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {`\n\n\n`}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                    {authUser.email}
                  </div>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  transformOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom',
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
            ) : (
              <Button
                onClick={() =>
                  doSignIn({
                    email: 'jason@fontech.com.tw',
                    password: 'Fontech123',
                  })
                }
              >
                log in
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
