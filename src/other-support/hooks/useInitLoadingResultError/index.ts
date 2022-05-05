import React from 'react'

import useLoadingResultErrorWithoutEffect from '@other-support/hooks/useLoadingResultError/withoutEffect'

type AsyncCallback<T> = () => Promise<T>

const useInitLoadingResultError = <T, U>({
  asyncCallback,
  customErrorCallback,
}: {
  asyncCallback: AsyncCallback<T>
  customErrorCallback?: (
    error: unknown
  ) => U | undefined
}) => {
  const [isInit, setIsInit] = React.useState(true)

  const memoizedAsyncCallback =
    React.useCallback(() => {
      return asyncCallback
    }, [asyncCallback])

  const {
    isLoading,
    error,
    result,
    recall: defaultRecall,
    fetchData: defaultFetchData,
  } = useLoadingResultErrorWithoutEffect({
    asyncCallback: memoizedAsyncCallback(),
    customErrorCallback,
  })

  const fetchData = React.useCallback(() => {
    // console.log('fetchData')
    defaultFetchData({
      finishCallBack: () => {
        setIsInit(false)
      },
    })
  }, [defaultFetchData])

  const recall = React.useCallback(() => {
    // console.log(
    //   `useInitLoadingResultError recall ${isInit}`
    // )
    if (isInit) {
      return false
    }

    return defaultRecall()
  }, [isInit, defaultRecall])

  React.useEffect(() => {
    // console.log(
    //   `useInitLoadingResultError ${isInit} ${isLoading}`
    // )
    if (!isInit) {
      return
    }

    if (isLoading) {
      return
    }

    fetchData()
  }, [isInit, isLoading, fetchData])

  React.useEffect(() => {
    if (isInit) {
      return
    }

    fetchData()
  }, [isInit, fetchData])

  return {
    isInit,
    setIsInit,
    isLoading,
    error,
    result,
    recall,
  }
}

export default useInitLoadingResultError
