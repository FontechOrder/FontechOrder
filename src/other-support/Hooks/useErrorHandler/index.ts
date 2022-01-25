import React from 'react'

const useErrorHandler = () => {
  const [error, setError] = React.useState<
    Error | undefined
  >(undefined)

  return {
    error,
    setError,
  }
}

export default useErrorHandler
