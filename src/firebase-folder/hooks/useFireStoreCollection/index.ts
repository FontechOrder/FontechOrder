import React from 'react'

import type {
  DocumentDataSnapshot,
  DocumentDataReference,
  DocumentSnapshotWithDataObject,
} from '@firebase-folder/types'

import getFireStoreCollectionPromise from '@firebase-folder/functions/getFireStoreCollectionPromise'

import useLoadingErrorHandler from '@other-support/Hooks/useLoadingErrorHandler'

import useInitHandler from '@other-support/Hooks/useInitHandler'

import {
  getDocumentData,
  initStringArray,
} from '@other-support/Consts'

const useFireStoreCollection = ({
  documentReference,
  path,
  pathSegments = initStringArray,
  orderByKey,
}: {
  documentReference?: DocumentDataReference
  path: string
  pathSegments?: string[]
  orderByKey?: string
}) => {
  const {
    isLoadingHandler,
    isLoading,
    error,
    setError,
  } = useLoadingErrorHandler()

  React.useState(false)
  const [documents, setDocuments] =
    React.useState(Array<DocumentDataSnapshot>())

  const dataExistsDocuments =
    React.useMemo(() => {
      return documents.filter(each =>
        getDocumentData(each)
      )
    }, [documents])

  const documentDatas = React.useMemo(() => {
    return dataExistsDocuments.map(each =>
      getDocumentData(each)
    )
  }, [dataExistsDocuments])

  const docDatas = React.useMemo(() => {
    return documents.reduce(
      (result, document) => {
        const data = getDocumentData(document)

        if (!data) {
          return result
        }

        return [
          ...result,
          {
            doc: document,
            data,
          },
        ]
      },
      Array<DocumentSnapshotWithDataObject>()
    )
  }, [documents])

  const getDocumentsWithCallBack =
    React.useCallback(
      (callback: () => void) => {
        const asyncGetDocuments = async () => {
          setError(undefined)
          setDocuments([])
          try {
            const docs =
              await getFireStoreCollectionPromise(
                {
                  documentReference,
                  path,
                  pathSegments,
                  orderByKey,
                }
              )
            setDocuments(docs)
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
        orderByKey,
        setError,
      ]
    )

  const getDocuments = React.useCallback(() => {
    isLoadingHandler(getDocumentsWithCallBack)
  }, [isLoadingHandler, getDocumentsWithCallBack])

  const { isInit } = useInitHandler(getDocuments)

  return {
    isInit,
    isLoading,
    isLoadingHandler,
    error,
    getDocuments,
    documents,
    dataExistsDocuments,
    documentDatas,
    docDatas,
  }
}

export default useFireStoreCollection
