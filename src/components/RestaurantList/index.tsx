import React from 'react'

import RestaurantItem from '@components/RestaurantItem'
import PaginationComponent from '@components/PaginationComponent'

import useFireStoreCollection from '@firebase-folder/hooks/useFireStoreCollection'

import usePagination from '@other-support/Hooks/usePagination'

const RestaurantList = () => {
  const [paginationText, setPaginationText] =
    React.useState('')

  const {
    currentPage,
    setCurrentPage,
    paginationCount,
    totalCount,
    setTotalCount,
    maxCurrentPage,
    disabledPrev,
    disabledNext,
    prevPaginationButtonPress,
    nextPaginationButtonPress,
  } = usePagination()

  const { isInit, documents: restaurantDocs } =
    useFireStoreCollection({
      path: 'restaurants',
      orderByKey: 'name',
    })

  React.useEffect(() => {
    const totalCount = restaurantDocs.length || 0

    setTotalCount(totalCount)
  }, [setTotalCount, restaurantDocs])

  const filteredRestaurantDocs =
    React.useMemo(() => {
      if (!restaurantDocs) {
        return []
      }

      const sliceNumberStart =
        (currentPage - 1) * paginationCount

      const sliceNumberEnd =
        sliceNumberStart + paginationCount <
        totalCount
          ? sliceNumberStart + paginationCount
          : totalCount

      return restaurantDocs.slice(
        sliceNumberStart,
        sliceNumberEnd
      )
    }, [
      currentPage,
      paginationCount,
      totalCount,
      restaurantDocs,
    ])

  const updatePaginationText = (
    paginationText: string
  ) => {
    setPaginationText(paginationText)
  }

  const updateCurrentPage = (
    newCurrentPage: number
  ) => {
    setCurrentPage(newCurrentPage)
  }

  if (isInit) {
    return <div>restaurant list loading...</div>
  }

  return (
    <div className="p-4 text-white">
      <div className="flex flex-row flex-wrap">
        {filteredRestaurantDocs.map(
          (restaurantDoc, index) => (
            <RestaurantItem
              key={'restaurant-item-' + index}
              restaurantDoc={restaurantDoc}
            />
          )
        )}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        paginationText={paginationText}
        updatePaginationText={
          updatePaginationText
        }
        updateCurrentPage={updateCurrentPage}
        maxCurrentPage={maxCurrentPage}
        disabledPrev={disabledPrev}
        prevPaginationButtonPress={
          prevPaginationButtonPress
        }
        disabledNext={disabledNext}
        nextPaginationButtonPress={
          nextPaginationButtonPress
        }
      />
    </div>
  )
}

export default RestaurantList
