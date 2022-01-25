import React from 'react'

const usePagination = (
  props:
    | {
        getPaginationCount?: number
        getTotalCount?: number
      }
    | undefined = {
    getPaginationCount: 5,
    getTotalCount: 0,
  }
) => {
  const [currentPage, setCurrentPage] =
    React.useState(1)
  const [paginationCount, setPaginationCount] =
    React.useState(props?.getPaginationCount || 5)
  const [totalCount, setTotalCount] =
    React.useState(props?.getTotalCount || 0)

  const maxCurrentPage = React.useMemo(() => {
    if (totalCount < paginationCount) {
      return 1
    }

    return Math.ceil(totalCount / paginationCount)
  }, [totalCount, paginationCount])

  const disabledPrev = React.useMemo(() => {
    return currentPage <= 1
  }, [currentPage])

  const disabledNext = React.useMemo(() => {
    return currentPage >= maxCurrentPage
  }, [currentPage, maxCurrentPage])

  const prevPaginationButtonPress =
    React.useCallback(() => {
      if (currentPage <= 1) {
        return
      }

      setCurrentPage(currentPage - 1)
    }, [currentPage])

  const nextPaginationButtonPress = () => {
    if (currentPage >= maxCurrentPage) {
      return
    }

    setCurrentPage(currentPage + 1)
  }

  return {
    currentPage,
    setCurrentPage,
    paginationCount,
    setPaginationCount,
    totalCount,
    setTotalCount,
    maxCurrentPage,
    disabledPrev,
    disabledNext,
    prevPaginationButtonPress,
    nextPaginationButtonPress,
  }
}

export default usePagination
