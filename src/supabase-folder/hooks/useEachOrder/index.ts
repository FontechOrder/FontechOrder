import React from 'react'

import { fetchEachOrder } from '@supabase-folder/fetchData'

import useInitLoadingResultError from '@other-support/hooks/useInitLoadingResultError'

// import useSubscription from '@supabase-folder/hooks/useSubscription'

// import type {
//   // RealtimePayloadCallback,
// } from '@supabase-folder/types'

import {
  // RealtimePayloadCallback,
  // DatabaseOrderInterface,
  // DatabaseRestaurantInterface,
  EachOrderInterface,
} from '@supabase-folder/types'

const useEachOrder = (id: number) => {
  const [eachOrder, setEachOrder] =
    React.useState<
      EachOrderInterface | undefined
    >(undefined)

  const momeFetchEachOrder = React.useCallback(
    () =>
      new Promise<EachOrderInterface>(
        (resolve, reject) => {
          const asyncFetchEachOrder =
            async () => {
              try {
                const eachOrderResult =
                  await fetchEachOrder(id)

                resolve(eachOrderResult)
              } catch (error) {
                reject(error)
              }
            }

          asyncFetchEachOrder()
        }
      ),
    [id]
  )

  const {
    isInit,
    isLoading,
    error,
    recall,
    result,
  } = useInitLoadingResultError({
    asyncCallback: momeFetchEachOrder,
  })

  // const insertCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
  //   React.useCallback(payload => {
  //     if (payload.errors) {
  //       return
  //     }

  //     const newOrder = payload.new

  //     if (!newOrder) {
  //     }

  //     // setOrder(newOrder)
  //   }, [])
  // const updateCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
  //   React.useCallback(payload => {
  //     if (payload.errors) {
  //       return
  //     }

  //     const newOrder = payload.new

  //     if (!newOrder) {
  //     }

  //     // setOrder(newOrder)
  //   }, [])
  // const deleteCallback: RealtimePayloadCallback<DatabaseOrderInterface> =
  //   React.useCallback(payload => {
  //     if (payload.errors) {
  //     }

  //     // setOrder(undefined)
  //   }, [])

  // useSubscription({
  //   path: `orders:id=eq.${id}`,
  //   insertCallback,
  //   updateCallback,
  //   deleteCallback,
  // })

  React.useEffect(() => {
    console.log('setEachOrder with result change')
    setEachOrder(result)
  }, [result])

  return {
    isInit,
    isLoading,
    error,
    recall,
    eachOrder,
  }
}

export default useEachOrder
