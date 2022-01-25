import React from 'react'
import classnames from 'classnames'

import CustomButton from '@components/CustomButton'

interface PaginationComponentProps {
  className?: string | string[]

  currentPage: number
  paginationText: string
  // paginationTextInputOnBlur: (
  //   e: React.FocusEvent<HTMLInputElement>
  // ) => void
  // paginationTextInputOnChange: (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => void

  updatePaginationText: (
    paginationText: string
  ) => void
  updateCurrentPage: (
    newCurrentPage: number
  ) => void

  maxCurrentPage: number
  disabledPrev: boolean
  prevPaginationButtonPress: () => void

  disabledNext: boolean
  nextPaginationButtonPress: () => void
}

const PaginationComponent = ({
  className,

  currentPage,
  paginationText,

  updatePaginationText,
  updateCurrentPage,

  maxCurrentPage,

  disabledPrev,
  prevPaginationButtonPress,

  disabledNext,
  nextPaginationButtonPress,
}: PaginationComponentProps) => {
  const paginationTextInputOnBlur = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    if (e.target.value === '') {
      updatePaginationText(currentPage.toString())
      return
    }

    const newCurrentPage = parseInt(
      e.target.value
    )

    if (newCurrentPage < 1) {
      updatePaginationText(currentPage.toString())
      return
    }

    if (newCurrentPage > maxCurrentPage) {
      updatePaginationText(currentPage.toString())
      return
    }

    updateCurrentPage(newCurrentPage)
    updatePaginationText(
      newCurrentPage.toString()
    )
  }

  const paginationTextInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updatePaginationText(e.target.value)
  }

  React.useEffect(() => {
    updatePaginationText(currentPage.toString())
  }, [currentPage, updatePaginationText])

  return (
    <div className="flex flex-col">
      <div
        className={classnames(
          className,
          'mt-[40px] flex flex-row items-center justify-center'
        )}
      >
        <CustomButton
          className="mx-2"
          disabled={disabledPrev}
          onClick={prevPaginationButtonPress}
        >
          Prev
        </CustomButton>
        <div className="mx-2">
          <input
            className="w-[100px] text-center text-black"
            type="number"
            value={paginationText}
            onBlur={paginationTextInputOnBlur}
            onChange={paginationTextInputOnChange}
          />
        </div>
        <CustomButton
          className="mx-2"
          disabled={disabledNext}
          onClick={nextPaginationButtonPress}
        >
          Next
        </CustomButton>
      </div>
      <div className="self-center text-black">
        共{maxCurrentPage}頁
      </div>
    </div>
  )
}

export default PaginationComponent
