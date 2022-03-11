import React from 'react'
import type { LinkProps } from 'next/link'

import CustomLink from '@components/CustomLink'

interface NavItemProps {
  title: string
  linkProps: LinkProps
}

const NavItem = ({
  title,
  linkProps,
}: NavItemProps) => {
  return (
    <CustomLink
      className="m-2 h-5 w-5 overflow-hidden truncate !p-0 hover:no-underline sm:h-auto sm:w-auto sm:overflow-auto md:hover:!underline"
      title={title}
      linkProps={linkProps}
    />
  )
}

export default NavItem
