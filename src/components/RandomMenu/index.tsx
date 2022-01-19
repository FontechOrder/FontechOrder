import React from 'react'

import DatePicker, {
  registerLocale,
} from 'react-datepicker'

import {
  format,
  eachDayOfInterval,
} from 'date-fns'
import zhTW from 'date-fns/locale/zh-TW'

import CustomButton from '@components/CustomButton'

import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

import { shuffledWithArrayAndLength } from '@other-support/Consts'

registerLocale('zh-TW', zhTW)

const RandomMenu: React.FC = () => {
  const { list } = useRestaurantsFirestore()

  const [startDate, setStartDate] =
    React.useState<Date | null>(null)
  const [endDate, setEndDate] =
    React.useState<Date | null>(null)

  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div
      id="random-menu"
      className="flex flex-col md:flex-row md:items-center"
    >
      <div>RandomMenu</div>
      <div className="flex justify-center py-4 w-[200px] md:mx-4">
        <DatePicker
          className="w-full text-center py-2"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          showWeekNumbers
          selectsRange
          locale="zh-TW"
        />
      </div>
      {startDate && endDate && (
        <CustomButton
          onClick={() => {
            const interval = eachDayOfInterval({
              start: startDate,
              end: endDate,
            })

            console.log(
              interval.map(eachDate =>
                format(eachDate, 'yyyy-MM-dd')
              )
            )

            console.log(
              'shuffledWithArrayAndLength: ',
              shuffledWithArrayAndLength({
                array: list,
                length: interval.length,
              })
            )
          }}
        >
          產生隨機
        </CustomButton>
      )}
    </div>
  )
}

export default RandomMenu
