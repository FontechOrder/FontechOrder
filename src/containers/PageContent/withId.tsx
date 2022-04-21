import React from 'react'
import { Box } from '@mui/material'

import PageContent from '@containers/PageContent'
import Header from '@containers/Header'

import useRouterQueryId from '@other-support/hooks/useRouterQueryId'

import { WithIdNumberChildrenProps } from '@other-support/interfaces'

const PageContentWithId: React.FC<
  WithIdNumberChildrenProps
> = ({ children }) => {
  const { isInit, id } = useRouterQueryId()

  const content = React.useMemo(() => {
    if (isInit) {
      return <Box>Init...</Box>
    }

    if (!id) {
      return <Box>404!</Box>
    }

    if (!children) {
      return null
    }

    return children(id)
  }, [isInit, id, children])

  return (
    <PageContent header={<Header />}>
      <Box m={2}>{content}</Box>
    </PageContent>
  )
}

export default PageContentWithId
