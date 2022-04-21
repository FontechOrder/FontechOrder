import React from 'react'

import useLoadingResultErrorWithoutEffect from '@other-support/hooks/useLoadingResultError/withoutEffect'

type AsyncCallback<T> = () => Promise<T>

const useLoadingResultError = <T, U>({
  asyncCallback,
  customErrorCallback,
}: {
  asyncCallback: AsyncCallback<T>
  customErrorCallback?: (
    error: unknown
  ) => U | undefined
}) => {
  const {
    isLoading,
    error,
    result,
    recall,
    fetchData,
  } = useLoadingResultErrorWithoutEffect({
    asyncCallback,
    customErrorCallback,
  })

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    fetchData()
  }, [isLoading, fetchData])

  return {
    isLoading,
    fetchData,
    error,
    result,
    recall,
  }
}

export default useLoadingResultError
