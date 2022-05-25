import React from 'react'
import { useDispatch } from 'react-redux'

import {
  addToAlertList,
  removeFromAlertList,
  clearAlertList,
} from '@redux-folder/reducers/alertListManagerState/action'

import type { AlertViewType } from '@other-support/types'

import useAlertListManagerDefault from '@redux-folder/hooks/useAlertListManager/default'

export const useAlertListManager = () => {
  const dispatch = useDispatch()
  const { alertList } =
    useAlertListManagerDefault()

  const doAddToAlertList = React.useCallback(
    (newAlert: AlertViewType) => {
      dispatch(addToAlertList(newAlert))
    },
    [dispatch]
  )

  const doRemoveFromAlertList = React.useCallback(
    (index: number) => {
      dispatch(removeFromAlertList(index))
    },
    [dispatch]
  )

  const doClearAlertList =
    React.useCallback(() => {
      dispatch(clearAlertList())
    }, [dispatch])

  return {
    doAddToAlertList,
    doRemoveFromAlertList,
    doClearAlertList,
    alertList,
  }
}

export default useAlertListManager
