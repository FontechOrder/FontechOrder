import {
  useSelector,
  shallowEqual,
} from 'react-redux'

export const useAlertListManager = () => {
  const { alertList } = useSelector(
    state => ({
      alertList:
        state.alertListManagerState.alertList,
    }),
    shallowEqual
  )

  return {
    alertList,
  }
}

export default useAlertListManager
