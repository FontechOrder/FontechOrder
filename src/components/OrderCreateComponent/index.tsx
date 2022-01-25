import React from 'react'

import DatePicker from 'react-datepicker'
import {
  format,
  compareAsc,
  addDays,
} from 'date-fns'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import { zhTW } from 'date-fns/locale'

import type {
  DocumentData,
  DocumentDataSnapshot,
} from '@firebase-folder/types'

import CustomButton from '@components/CustomButton'

import setFireStoreDocPromise from '@firebase-folder/functions/setFireStoreDocPromise'

import useOrderCreate from '@other-support/Hooks/useOrderCreate'

import { shuffle } from '@other-support/Consts'

import SelectedRestaurantContent from '@components/OrderCreateComponent/SelectedRestaurantContent'

import type { SelectedRestaurantType } from '@components/OrderCreateComponent/types'

type DatePairRestaurantType = {
  restaurantDocumentDataSnapshot?: DocumentDataSnapshot
  date: Date
}

const OrderCreateComponent = () => {
  const {
    isInit,
    isLoading,

    restaurantDocDatas,
    existDateTexts,
  } = useOrderCreate()

  // console.log(
  //   'OrderCreateComponentexistDateTexts: ',
  //   existDateTexts
  // )

  const [
    selectedDeleteRestaurants,
    setSelectedDeleteRestaurants,
  ] = React.useState<SelectedRestaurantType[]>([])

  const [
    randomDatePairRestaurants,
    setRandomDatePairRestaurants,
  ] = React.useState<DatePairRestaurantType[]>([])

  const [
    isDoingCreateOrders,
    setIsDoingCreateOrders,
  ] = React.useState(false)
  const [selectedDates, setSelectedDates] =
    React.useState<Date[]>([])
  const [isOpen, setIsOpen] =
    React.useState(false)

  const handleChange = (date: Date | null) => {
    setIsOpen(!isOpen)

    if (!date) {
      return
    }

    setSelectedDates(dates => [...dates, date])
  }

  const handleAddDateClick: React.MouseEventHandler<
    HTMLButtonElement
  > = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const selectedRestaurantOnClick =
    React.useCallback(
      (
        selectedRestaurant: SelectedRestaurantType
      ) => {
        setSelectedDeleteRestaurants(
          [
            ...[
              ...selectedDeleteRestaurants.filter(
                each =>
                  each.documentDataSnapshot.id !==
                  selectedRestaurant
                    .documentDataSnapshot.id
              ),
              {
                documentDataSnapshot:
                  selectedRestaurant.documentDataSnapshot,
                delete:
                  !selectedRestaurant.delete,
              },
            ],
          ].sort(each => (each.delete ? 1 : -1))
        )
      },
      [selectedDeleteRestaurants]
    )

  const excludeDates = React.useMemo(() => {
    // console.log(
    //   'exclude dates selectedDates: ',
    //   selectedDates
    // )
    console.log(
      'exclude dates existDateTexts: ',
      existDateTexts
    )
    return [...selectedDates]
  }, [selectedDates, existDateTexts])

  const noSelectedDates = React.useMemo(() => {
    return selectedDates.length === 0
  }, [selectedDates])

  const disabledCreateOrderButton =
    React.useMemo(() => {
      const noRandomDatePairRestaurants =
        randomDatePairRestaurants.length === 0

      return (
        isDoingCreateOrders ||
        noRandomDatePairRestaurants
      )
    }, [
      isDoingCreateOrders,
      randomDatePairRestaurants,
    ])

  const selectedDatesLengthOverSeven =
    React.useMemo(() => {
      return selectedDates.length >= 7
    }, [selectedDates])

  // React.useEffect(() => {
  //   setSelectedDeleteRestaurants(
  //     restaurantDocs.map(each => ({
  //       documentDataSnapshot: each,
  //       delete: false,
  //     }))
  //   )
  // }, [restaurantDocs])

  React.useEffect(() => {
    setSelectedDeleteRestaurants(
      restaurantDocDatas.map(each => ({
        documentDataSnapshot: each.doc,
        delete: false,
      }))
    )
  }, [restaurantDocDatas])

  const randomRestaurnatsButtonClick =
    React.useCallback(() => {
      // console.log(
      //   'random restaurnats with selectedDates: ',
      //   selectedDates
      // )

      // console.log(
      //   'random restaurnats with selectedDeleteRestaurants: ',
      //   selectedDeleteRestaurants
      // )
      const randomList = shuffle(
        selectedDeleteRestaurants.filter(
          each => !each.delete
        )
      ).slice(0, selectedDates.length)

      setRandomDatePairRestaurants(
        selectedDates.map((each, index) => ({
          date: each,
          restaurantDocumentDataSnapshot:
            randomList[index]
              ?.documentDataSnapshot,
        }))
      )
    }, [selectedDates, selectedDeleteRestaurants])

  const createOrderButtonClick =
    React.useCallback(() => {
      const asyncCreateOrderButtonClick =
        async () => {
          setIsDoingCreateOrders(true)

          try {
            await Promise.all(
              randomDatePairRestaurants.map(
                async datePairRestaurant => {
                  // console.log(
                  //   'datePairRestaurant: ',
                  //   datePairRestaurant
                  // )

                  if (
                    !datePairRestaurant.restaurantDocumentDataSnapshot
                  ) {
                    return
                  }

                  const dateToString =
                    formatWithOptions(
                      { locale: zhTW },
                      'yyyy-MM-dd'
                    )

                  const dateText = dateToString(
                    datePairRestaurant.date
                  )

                  if (!dateText) {
                    throw new Error(
                      'dateText not found'
                    )
                  }

                  const document: DocumentData = {
                    finished: false,
                    'date-text': dateText,
                    'restaurant-reference':
                      datePairRestaurant
                        .restaurantDocumentDataSnapshot
                        .ref,
                  }

                  console.log(
                    'datePairRestaurant document: ',
                    document
                  )

                  await setFireStoreDocPromise({
                    path: 'orders/' + dateText,
                    data: document,
                  })
                }
              )
            )

            setRandomDatePairRestaurants([])

            window.alert('success')
          } catch (error) {
            if (error instanceof Error) {
              console.log(
                'datePairRestaurant error: ',
                error.message
              )
            } else {
              console.log(
                'datePairRestaurant error'
              )
            }

            window.alert('some error')
          }
          setIsDoingCreateOrders(false)
        }
      asyncCreateOrderButtonClick()
    }, [randomDatePairRestaurants])

  const randomDatePairRestaurantList =
    React.useMemo(
      () =>
        randomDatePairRestaurants.map(
          (randomDatePairRestaurant, index) => (
            <div
              key={`random-date-pair-restaurant-${index}`}
              className="flex flex-row"
            >
              <div className="pr-2">
                {format(
                  randomDatePairRestaurant.date,
                  'yyyy/MM/dd'
                )}
              </div>
              <div>
                {randomDatePairRestaurant
                  .restaurantDocumentDataSnapshot
                  ?.id || ''}
              </div>
            </div>
          )
        ),
      [randomDatePairRestaurants]
    )

  if (isInit || isLoading) {
    return <div>Order Create is loading...</div>
  }

  return (
    <>
      <div className="mb-2 flex flex-row justify-around">
        <SelectedRestaurantContent
          selectedDeleteRestaurants={
            selectedDeleteRestaurants
          }
          selectedRestaurantOnClick={
            selectedRestaurantOnClick
          }
        />

        <div className="flex flex-1 flex-col items-start">
          {!noSelectedDates && (
            <h2>selected dates:</h2>
          )}

          <div>
            {selectedDates
              .sort(compareAsc)
              .map((date, index) => {
                const dateToString =
                  formatWithOptions(
                    { locale: zhTW },
                    'yyyy/MM/dd EEE'
                  )

                const dateText =
                  dateToString(date)

                return (
                  <div
                    className="flex flex-row"
                    key={`dateText-${dateText}`}
                  >
                    <p>
                      {index + 1}. {dateText}
                    </p>

                    <button
                      className="pl-8"
                      onClick={() =>
                        setSelectedDates(dates =>
                          dates.filter(
                            selectedDate =>
                              date !==
                              selectedDate
                          )
                        )
                      }
                    >
                      X
                    </button>
                  </div>
                )
              })}
          </div>
          <CustomButton
            className="mr-2"
            disabled={
              selectedDatesLengthOverSeven
            }
            onClick={handleAddDateClick}
          >
            add Date
          </CustomButton>
          {isOpen && (
            <DatePicker
              selected={null}
              excludeDates={excludeDates}
              onChange={handleChange}
              inline
              minDate={new Date()}
              maxDate={addDays(new Date(), 14)}
              popperPlacement="top-start"
            />
          )}
        </div>
      </div>
      <CustomButton
        className="mr-2"
        disabled={noSelectedDates}
        onClick={randomRestaurnatsButtonClick}
      >
        random restaurnats
      </CustomButton>
      <CustomButton
        className="mr-2"
        disabled={disabledCreateOrderButton}
        onClick={createOrderButtonClick}
      >
        {isDoingCreateOrders
          ? 'isLoading'
          : 'create order'}
      </CustomButton>

      {randomDatePairRestaurantList}
    </>
  )
}

export default OrderCreateComponent
