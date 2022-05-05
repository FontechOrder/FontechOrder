import React from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Stack,
  Grid,
  Tooltip,
  Box,
  Link,
} from '@mui/material'

import MenuBookIcon from '@mui/icons-material/MenuBook'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'

import HeaderRightAuthContent from '@containers/Header/RightAuthContent'

import useAdminUser from '@other-support/hooks/useAdminUser'

const defaultLinks = [
  {
    key: 'order',
    href: '/orders',
    title: 'Order',
    iconsMaterialElement: (
      <ReceiptLongIcon fontSize="large" />
    ),
  },
  {
    key: 'restaurant',
    href: '/restaurants',
    title: 'Restaurant',
    iconsMaterialElement: (
      <MenuBookIcon fontSize="large" />
    ),
  },
]

const adminLinks = [
  {
    key: 'new-order',
    href: '/new-order',
    title: 'New order',
    iconsMaterialElement: (
      <AddShoppingCartIcon fontSize="large" />
    ),
  },
  {
    key: 'new-menu',
    href: '/new-menu',
    title: 'New Menu',
    iconsMaterialElement: (
      <AddBusinessIcon fontSize="large" />
    ),
  },
]

const Header = () => {
  const { adminUser } = useAdminUser()
  const { pathname } = useRouter()

  const links = React.useMemo(() => {
    if (adminUser) {
      return [...defaultLinks, ...adminLinks]
    }

    return defaultLinks
  }, [adminUser])

  return (
    <div className="flex w-full justify-center bg-blue-400">
      <div className="flex w-full flex-row bg-green-500 p-4 lg:w-[64rem] lg:max-w-[64rem]">
        <Grid container spacing={1}>
          <Grid
            className="flex flex-wrap items-end"
            item
            xs={3}
            sm={2}
            md={2}
          >
            <Stack>
              {links.map(link => (
                <Box
                  key={`default-links-${link.key}`}
                  className={classnames(
                    pathname === link.href &&
                      '!bg-gray-400'
                  )}
                >
                  <NextLink
                    href={link.href}
                    as={`${process.env.pathPrefix}${link.href}`}
                    passHref
                  >
                    <Link>
                      <Tooltip title={link.title}>
                        {
                          link.iconsMaterialElement
                        }
                      </Tooltip>
                    </Link>
                  </NextLink>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={9} sm={10} md={10}>
            <HeaderRightAuthContent />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header
