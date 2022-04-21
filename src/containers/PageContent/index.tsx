import React from 'react'

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

      <div className="w-full self-center lg:w-[64rem] lg:max-w-[64rem]">
        <main>{children}</main>
      </div>

      {footer}
    </div>
  )
}

export default PageContent
