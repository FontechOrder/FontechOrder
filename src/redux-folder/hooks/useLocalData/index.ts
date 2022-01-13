import React from 'react'

import type { Dispatch } from 'redux'

import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import { LocalDataManagerStateType } from '@redux-folder/types/localDataManagerType'

import {
  saveLocalData,
  clearLocalData,
} from '@redux-folder/actions/localDataManagerAction'

export const useLocalData = () => {
  const dispatch = useDispatch()

  const { data } = useSelector(
    state => ({
      data: state.localDataManagerState.data,
    }),
    shallowEqual
  )

  const doSaveLocalData = (
    data: LocalDataManagerStateType
  ) => {
    dispatch(saveLocalData(data))
  }

  const doClearLocalData = () => {
    dispatch(clearLocalData())
  }

  return {
    doSaveLocalData,
    doClearLocalData,
    data,
  }
}

export default useLocalData
