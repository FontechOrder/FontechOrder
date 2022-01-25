import React from 'react'

import type { User } from '@firebase/auth'

import FirebaseLogOutButtonComponent from '@components/FirebaseLogOutButtonComponent'

import { navs } from '@other-support/Data'
import NavItem from '@components/NavItem'

interface HeaderProps {
  firebaseAuthUser: User | null
}

const Header = ({
  firebaseAuthUser,
}: HeaderProps) => {
  // console.log('Header firebaseAuthUser: ', firebaseAuthUser)
  return (
    <div className="sticky top-0 z-[99] flex flex-col items-center bg-gray-400">
      <div className="flex w-full items-center justify-center bg-red-400 p-2 lg:max-w-[64rem]">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex-shrink-1 mr-2 flex flex-row self-end text-right">
            {navs.map((nav, index) => (
              <NavItem
                key={`header_nav_${index}`}
                title={nav.title}
                path={nav.path}
              />
            ))}
          </div>
          {firebaseAuthUser && (
            <FirebaseLogOutButtonComponent
              firebaseAuthUser={firebaseAuthUser}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
