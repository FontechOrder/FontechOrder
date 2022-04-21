import React from 'react'

type AsyncCallback<T> = () => Promise<T>
type ResultCallback<T> = (props: {
  blockByIsLoading: boolean
  result?: T
  error?: unknown
}) => void

const useDynamicLoadingResultError = () => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const doAsyncFetchData = React.useCallback(
    <T>({
      asyncCallback,
      resultCallback,
    }: {
      asyncCallback: AsyncCallback<T>
      resultCallback: ResultCallback<T>
    }) => {
      const asyncFetchData = async () => {
        if (isLoading) {
          resultCallback({
            blockByIsLoading: true,
          })

          return
        }

        setIsLoading(true)

        try {
          const resultResponse =
            await asyncCallback()

          resultCallback({
            blockByIsLoading: false,
            result: resultResponse,
          })
        } catch (err) {
          resultCallback({
            blockByIsLoading: false,
            error: err,
          })
        }

        setIsLoading(false)
      }

      asyncFetchData()
    },
    [isLoading, setIsLoading]
  )

  return {
    isLoading,
    doAsyncFetchData,
  }
}

export default useDynamicLoadingResultError
