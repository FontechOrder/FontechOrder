import React from 'react'
import useFireStoreCollection from '@firebase-folder/hooks/useFireStoreCollection'

import {
  unionArray,
  getDocumentSnapshotWithDataObjects,
} from '@other-support/Consts'
import useAllOrder from '@other-support/Hooks/useAllOrder'

const useOrderCreate = () => {
  const {
    isInit: restaurantIsInit,
    isLoading: restaurantIsLoading,
    docDatas: restaurantDocDatas,
  } = useFireStoreCollection({
    path: 'restaurants',
    orderByKey: 'name',
  })

  const {
    isInit: orderIsInit,
    isLoading: orderIsLoading,

    finishedOrderDocs,
    unfinishedOrderDocs,
  } = useAllOrder()

  const existDateTexts: string[] =
    React.useMemo(() => {
      return unionArray(
        getDocumentSnapshotWithDataObjects([
          ...finishedOrderDocs,
          ...unfinishedOrderDocs,
        ]).reduce((result, each) => {
          const dateText: string =
            each.data['date-text']

          if (!dateText) {
            return result
          }
          return [...result, dateText]
        }, Array<string>())
      )
    }, [finishedOrderDocs, unfinishedOrderDocs])

  const isInit = React.useMemo(() => {
    return restaurantIsInit || orderIsInit
  }, [restaurantIsInit, orderIsInit])

  const isLoading = React.useMemo(() => {
    return restaurantIsLoading || orderIsLoading
  }, [restaurantIsLoading, orderIsLoading])

  return {
    isInit,
    isLoading,

    restaurantIsInit,
    restaurantIsLoading,

    orderIsInit,
    orderIsLoading,

    restaurantDocDatas,
    existDateTexts,
  }
}

export default useOrderCreate
