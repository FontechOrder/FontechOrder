import React from 'react'
import { useUserManager } from '@redux-folder/hooks/useUserManager'
import { adminUsers } from '@other-support/data'

// import { sleep } from '@other-support/consts'

const useAdminUser = () => {
  const [isInit, setIsInit] = React.useState(true)
  const { user } = useUserManager()

  const adminUser = React.useMemo(() => {
    if (!user) {
      return
    }

    if (!user.email) {
      return
    }

    if (!adminUsers.includes(user.email)) {
      return
    }

    return user
  }, [user])

  React.useEffect(() => {
    if (isInit) {
      setIsInit(false)
    }
  }, [isInit])

  return { isInit, adminUser }
}

export default useAdminUser
