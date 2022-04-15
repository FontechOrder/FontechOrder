import React from 'react'

import { instanceError } from '@other-support/Consts'

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
  const [isLoading, setIsLoading] =
    React.useState(false)
  const [error, setError] = React.useState<
    U | Error | undefined
  >(undefined)
  const [result, setResult] = React.useState<
    T | undefined
  >(undefined)

  const fetchData = React.useCallback(() => {
    const asyncFetchData = async () => {
      if (error) {
        return
      }

      if (result !== undefined) {
        return
      }

      if (isLoading) {
        return
      }

      setIsLoading(true)
      setResult(undefined)

      try {
        const resultResponse =
          await asyncCallback()
        setResult(resultResponse)
      } catch (err) {
        const newError =
          (customErrorCallback &&
            customErrorCallback(err)) ||
          instanceError(err) ||
          new Error('fetchData Error')
        setError(newError)
      }

      setIsInit(false)
      setIsLoading(false)
    }

    asyncFetchData()
  }, [
    asyncCallback,
    customErrorCallback,
    isLoading,
    error,
    result,
    setIsLoading,
    setResult,
    setError,
  ])

  const recall = React.useCallback(() => {
    if (isInit) {
      return false
    }

    if (isLoading) {
      return false
    }

    setError(undefined)

    if (result !== undefined) {
      setResult(undefined)
    }

    return true
  }, [
    result,
    isInit,
    isLoading,
    setError,
    setResult,
  ])

  React.useEffect(() => {
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
    isLoading,
    error,
    result,
    recall,
  }
}

export default useInitLoadingResultError
