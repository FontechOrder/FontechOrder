import React from 'react'

import type { DocumentDataSnapshot } from '@firebase-folder/types'

import PaginationComponent from '@components/PaginationComponent'

import useFireStoreCollection from '@firebase-folder/hooks/useFireStoreCollection'

import usePagination from '@other-support/Hooks/usePagination'

interface RestaurantMenuListProps {
  restaurantDoc: DocumentDataSnapshot
}

const RestaurantMenuList = ({
  restaurantDoc,
}: RestaurantMenuListProps) => {
  const memoizedDocumentReference =
    React.useMemo(() => {
      return restaurantDoc.ref
    }, [restaurantDoc])

  const {
    isInit,
    dataExistsDocuments: menuItemList,
  } = useFireStoreCollection({
    documentReference: memoizedDocumentReference,
    path: 'menuItems',
    // orderByKey: 'item-name',
  })

  // console.log('menuItemList: ', menuItemList)

  const [paginationText, setPaginationText] =
    React.useState('')

  const {
    currentPage,
    setCurrentPage,
    totalCount,
    setTotalCount,
    maxCurrentPage,
    disabledPrev,
    disabledNext,
    prevPaginationButtonPress,
    nextPaginationButtonPress,
  } = usePagination()

  React.useEffect(() => {
    setTotalCount(menuItemList.length)
  }, [menuItemList, setTotalCount])

  if (isInit) {
    return <div>menu is loading...</div>
  }

  // const filteredMenuItemDataList =
  //   React.useMemo(() => {
  //     if (!noUndefinedMenuItemDataList) {
  //       return []
  //     }

  //     const sliceNumberStart =
  //       (currentPage - 1) * paginationCount

  //     const sliceNumberEnd =
  //       sliceNumberStart + paginationCount <
  //       totalCount
  //         ? sliceNumberStart + paginationCount
  //         : totalCount

  //     return noUndefinedMenuItemDataList.slice(
  //       sliceNumberStart,
  //       sliceNumberEnd
  //     )
  //   }, [
  //     currentPage,
  //     paginationCount,
  //     totalCount,
  //     noUndefinedMenuItemDataList,
  //   ])

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

  return (
    <div className="-mx-2 flex flex-col py-4">
      <div className="text-gray">
        Restaurant Menu List
      </div>
      <div className="relative flex flex-col">
        {menuItemList.map((menuItem, index) => {
          return (
            <div
              key={'menu-item-' + index}
              className="text-gray flex w-full flex-row flex-wrap py-1 lg:w-1/4"
            >
              <div className="flex flex-row">
                {['name', 'cost'].map(
                  (each, eachIndex) => (
                    <div
                      key={
                        'menu-item-field-' +
                        eachIndex
                      }
                      className="flex flex-row"
                    >
                      {/*                    <div className="w-[100px]">
                      {each}
                    </div> */}
                      <div className="pr-2">
                        {menuItem.get(each)}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>

      {totalCount ? (
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
      ) : null}
    </div>
  )
}

export default RestaurantMenuList
