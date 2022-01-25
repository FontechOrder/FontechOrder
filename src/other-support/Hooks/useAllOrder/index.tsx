import React from 'react'

import { getDocumentData } from '@other-support/Consts'

import useFireStoreCollection from '@firebase-folder/hooks/useFireStoreCollection'

const useAllOrder = () => {
  const {
    isInit: ordersIsInit,
    isLoading: ordersIsLoading,

    documents: orderDocs,
  } = useFireStoreCollection({
    path: 'orders',
    orderByKey: 'date-text',
  })

  const {
    isInit: historyOrdersIsInit,
    isLoading: historyOrdersIsLoading,
    // error: historyOrdersError,
    documents: historyOrderDocs,
  } = useFireStoreCollection({
    path: 'history-orders',
    orderByKey: 'date-text',
  })

  const finishedOrderDocs = React.useMemo(() => {
    return orderDocs.filter(orderDoc => {
      const finished =
        getDocumentData(orderDoc)?.finished

      if (finished === undefined) {
        return false
      }

      return finished
    })
  }, [orderDocs])

  const unfinishedOrderDocs =
    React.useMemo(() => {
      return orderDocs.filter(orderDoc => {
        const finished =
          getDocumentData(orderDoc)?.finished

        if (finished === undefined) {
          return false
        }

        return !finished
      })
    }, [orderDocs])

  const isInit = React.useMemo(() => {
    return ordersIsInit || historyOrdersIsInit
  }, [ordersIsInit, historyOrdersIsInit])

  const isLoading = React.useMemo(() => {
    return (
      ordersIsLoading || historyOrdersIsLoading
    )
  }, [ordersIsLoading, historyOrdersIsLoading])

  return {
    isInit,
    isLoading,

    finishedOrderDocs,
    unfinishedOrderDocs,
    historyOrderDocs,
  }
}

export default useAllOrder
