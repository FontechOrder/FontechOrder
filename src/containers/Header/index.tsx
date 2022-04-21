import React from 'react'
import NextLink from 'next/link'

import {
  Grid,
  Tooltip,
  Box,
  Link,
} from '@mui/material'

import MenuBookIcon from '@mui/icons-material/MenuBook'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

import HeaderRightAuthContent from '@containers/Header/RightAuthContent'

const Header = () => {
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
            <Box>
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

            <Box>
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
