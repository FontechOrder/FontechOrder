import React from 'react'

import CustomLink from '@components/CustomLink'

interface NavItemProps {
  title: string
  path: string
}

const NavItem = ({
  title,
  path,
}: NavItemProps) => {
  return (
    <CustomLink
      className="m-2 h-5 w-5 overflow-hidden truncate !p-0 hover:no-underline sm:h-auto sm:w-auto sm:overflow-auto md:hover:!underline"
      title={title}
      path={path}
    />
  )
}

export default NavItem
