import React from 'react'

const AppContent: React.FC = props => {
  return (
    <div className="bg-[green] w-screen h-full min-w-[320px] min-h-[100vh]">
      <div>{props.children}</div>
    </div>
  )
}

export default AppContent
