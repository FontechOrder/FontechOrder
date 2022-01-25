import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentDataReference,
} from '@firebase-folder/types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

import useLoadingErrorHandler from '@other-support/Hooks/useLoadingErrorHandler'
import useInitHandler from '@other-support/Hooks/useInitHandler'

import {
  getDocumentData,
  initStringArray,
} from '@other-support/Consts'

const useFireStoreDoc = ({
  documentReference,
  path,
  pathSegments = initStringArray,
}: {
  documentReference?: DocumentDataReference
  path: string
  pathSegments?: string[]
}) => {
  const {
    isLoadingHandler,
    isLoading,
    error,
    setError,
  } = useLoadingErrorHandler()

  React.useState(false)
  const [document, setDocument] = React.useState<
    DocumentDataSnapshot | undefined
  >(undefined)

  const data = React.useMemo(() => {
    return getDocumentData(document)
  }, [document])

  const getDocumentWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        const asyncGetDocuments = async () => {
          setError(undefined)
          setDocument(undefined)
          try {
            const doc =
              await getFireStoreDocPromise({
                documentReference,
                path,
                pathSegments,
              })
            setDocument(doc)
          } catch (getError) {
            const error =
              getError instanceof Error
                ? getError
                : new Error('getDocuments Error')
            setError(error)
          }
          callback()
        }

        asyncGetDocuments()
      },
      [
        documentReference,
        path,
        pathSegments,
        setError,
      ]
    )

  const getDocument = React.useCallback(() => {
    isLoadingHandler(getDocumentWithCallBack)
  }, [isLoadingHandler, getDocumentWithCallBack])

  const { isInit } = useInitHandler(getDocument)

  return {
    isInit,
    isLoading,
    isLoadingHandler,
    error,
    getDocument,
    document,
    data,
  }
}

export default useFireStoreDoc
