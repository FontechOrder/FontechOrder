import React from 'react'
import PageContent from '@containers/PageContent'
import Header from '@containers/Header'

const PageContentDefault: React.FC = ({
  children,
}) => {
  return (
    <PageContent header={Header()}>
      {children}
    </PageContent>
  )
}

export default PageContentDefault
