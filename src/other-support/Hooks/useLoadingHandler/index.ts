import React from 'react'

const useLoadingHandler = () => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const isLoadingHandler = React.useCallback(
    (
      withCallback: (callback: () => void) => void
    ) => {
      if (isLoading) {
        return
      }

      setIsLoading(true)

      withCallback(() => {
        setIsLoading(false)
      })
    },
    [isLoading]
  )

  return {
    isLoading,
    setIsLoading,
    isLoadingHandler,
  }
}

export default useLoadingHandler
