import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import { LocalDataManagerStateType } from '@redux-folder/reducers/localDataManagerState/type'

import {
  saveLocalData,
  clearLocalData,
} from '@redux-folder/reducers/localDataManagerState/action'

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
