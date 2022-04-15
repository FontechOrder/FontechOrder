import React from 'react'
import fetchStorageMenus from '@supabase-folder/functions/fetchStorageMenus'
import useInitLoadingResultError from '@other-support/Hooks/useInitLoadingResultError'

interface CustomError extends Error {}

const useStorageMenus = () => {
  const customErrorCallback = (): CustomError => {
    return new Error('Custom')
  }

  const {
    isInit,
    isLoading,
    error,
    result,
    recall,
  } = useInitLoadingResultError({
    asyncCallback: fetchStorageMenus,
    customErrorCallback,
  })

  const storageMenus = React.useMemo(() => {
    if (!result) {
      return []
    }

    return result
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    storageMenus,
    recall,
  }
}

export default useStorageMenus
