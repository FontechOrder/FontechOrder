import React from 'react'
import useAlertListManager from '@redux-folder/hooks/useAlertListManager'

export const useAlertListManagerWithReduceTimer =
  () => {
    const {
      doAddToAlertList,
      doRemoveFromAlertList,
      doClearAlertList,
      alertList,
    } = useAlertListManager()

    React.useEffect(() => {
      if (alertList.length < 1) {
        return
      }

      const timer = setTimeout(() => {
        doRemoveFromAlertList(
          alertList.length - 1
        )
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }, [alertList, doRemoveFromAlertList])

    return {
      doAddToAlertList,
      doRemoveFromAlertList,
      doClearAlertList,
      alertList,
    }
  }

export default useAlertListManagerWithReduceTimer
