import React from 'react'
import { Box } from '@mui/material'

import PageContent from '@containers/PageContent'
import Header from '@containers/Header'

import useAdminUser from '@other-support/hooks/useAdminUser'

const PageContentAdmin: React.FC = ({
  children,
}) => {
  const { isInit, adminUser } = useAdminUser()

  const content = React.useMemo(() => {
    if (isInit) {
      return <Box>Init...</Box>
    }

    if (!adminUser) {
      return <Box>404!</Box>
    }

    return children
  }, [isInit, adminUser, children])

  return (
    <PageContent header={<Header />}>
      <Box m={2}>{content}</Box>
    </PageContent>
  )
}

export default PageContentAdmin
