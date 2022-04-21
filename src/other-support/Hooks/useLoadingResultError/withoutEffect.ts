import React from 'react'

import {
  instanceError,
  emptyCallback,
} from '@other-support/consts'

import type { EmptyCallback } from '@other-support/types'

type AsyncCallback<T> = () => Promise<T>
type FetchDataCallBack = {
  stopByLoadingCallBack?: EmptyCallback
  finishCallBack?: EmptyCallback
}

const useLoadingResultErrorWithoutEffect = <
  T,
  U
>({
  asyncCallback,
  customErrorCallback,
}: {
  asyncCallback: AsyncCallback<T>
  customErrorCallback?: (
    error: unknown
  ) => U | undefined
}) => {
  const [isLoading, setIsLoading] =
    React.useState(false)
  const [error, setError] = React.useState<
    U | Error | undefined
  >(undefined)
  const [result, setResult] = React.useState<
    T | undefined
  >(undefined)

  const memoizedAsyncCallback =
    React.useCallback(() => {
      return asyncCallback
    }, [asyncCallback])

  const fetchData = React.useCallback(
    (
      props: FetchDataCallBack | undefined = {
        stopByLoadingCallBack: emptyCallback,
        finishCallBack: emptyCallback,
      }
    ) => {
      const asyncFetchData = async () => {
        if (error) {
          props?.finishCallBack?.()
          return
        }

        if (result !== undefined) {
          props?.finishCallBack?.()
          return
        }

        if (isLoading) {
          props?.stopByLoadingCallBack?.()
          props?.finishCallBack?.()
          return
        }

        setIsLoading(true)
        setResult(undefined)

        try {
          const resultResponse =
            await memoizedAsyncCallback()()
          setResult(resultResponse)
        } catch (err) {
          const newError =
            (customErrorCallback &&
              customErrorCallback(err)) ||
            instanceError(err) ||
            new Error('fetchData Error')
          setError(newError)
        }

        props?.finishCallBack?.()
        setIsLoading(false)
      }

      asyncFetchData()
    },
    [
      memoizedAsyncCallback,
      customErrorCallback,
      isLoading,
      error,
      result,
      setIsLoading,
      setResult,
      setError,
    ]
  )

  const recall = React.useCallback(() => {
    if (isLoading) {
      return false
    }

    setError(undefined)

    if (result !== undefined) {
      setResult(undefined)
    }

    return true
  }, [result, isLoading, setError, setResult])

  return {
    isLoading,
    fetchData,
    error,
    result,
    recall,
  }
}

export default useLoadingResultErrorWithoutEffect
