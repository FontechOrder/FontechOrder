import React from 'react'

import AlertListView from '@containers/AlertListView'

interface PageContentProps {
  header?: React.ReactNode
  footer?: React.ReactNode
}

const PageContent: React.FC<PageContentProps> = ({
  header,
  children,
  footer,
}) => {
  return (
    <div
      id="page-content"
      className="flex min-w-[20rem] flex-col "
    >
      {header}

      <div className="relative w-full self-center lg:w-[64rem] lg:max-w-[64rem]">
        <main>{children}</main>
        <AlertListView />
      </div>
      {footer}
    </div>
  )
}

export default PageContent
