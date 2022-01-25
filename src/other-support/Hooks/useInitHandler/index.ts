import React from 'react'

const useInitHandler = (
  callback?: () => void
) => {
  const [isInit, setIsInit] = React.useState(true)

  React.useEffect(() => {
    if (!isInit) {
      return
    }

    setIsInit(false)

    callback?.()
  }, [isInit, callback])

  return {
    isInit,
    setIsInit,
  }
}

export default useInitHandler
