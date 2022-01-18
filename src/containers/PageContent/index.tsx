import React from 'react'

const PageContent: React.FC = props => {
  return (
    <div
      id="page-content"
      className="flex justify-center p-4"
    >
      <div className="lg:w-[1024px] lg:max-w-[1024px]">
        {props.children}
      </div>
    </div>
  )
}

export default PageContent
