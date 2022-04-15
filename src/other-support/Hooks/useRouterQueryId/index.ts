import React from 'react'
import { useRouter } from 'next/router'

import {
  sleep,
  forceStringForNextRouterQueryFirst,
} from '@other-support/Consts'

const useRouterQueryId = () => {
  const [isInit, setIsInit] = React.useState(true)

  const router = useRouter()
  const { id: queryId } = router.query

  const idText = React.useMemo(() => {
    console.log('queryId: ', queryId)

    return forceStringForNextRouterQueryFirst(
      queryId
    )
  }, [queryId])

  const id = React.useMemo(() => {
    const intId = parseInt(idText)

    if (!intId) {
      return
    }

    if (intId <= 0) {
      return
    }

    return intId
  }, [idText])

  React.useEffect(() => {
    const asyncSetIsInit = async () => {
      await sleep(500)
      setIsInit(false)
    }

    asyncSetIsInit()
  }, [setIsInit])

  return { id, idText, isInit }
}

export default useRouterQueryId
