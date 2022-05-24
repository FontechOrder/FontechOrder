import React from 'react'
import { Box } from '@mui/material'

import Calendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'

import useOrderList from '@supabase-folder/hooks/useOrderList'

const PageOrder = () => {
  const [init, setInit] = React.useState(true)
  const [loading, setLoading] =
    React.useState(false)

  const {
    doClearOrderList,
    doFetchOrderListWithCallback,
    orderList,
  } = useOrderList()

  const events = React.useMemo(() => {
    return orderList.map(order => ({
      title: order.date_text,
      start: order.date_text + 'T00:00:00+08:00',

      backgroundColor: order.finish ? 'red' : '',
      borderColor: order.finish ? 'red' : '',
      extendedProps: {
        order,
      },
      url: order.finish
        ? ''
        : `${process.env.pathPrefix}/orders/detail?id=${order.id}`,
    }))
  }, [orderList])

  const reloadButtonClick =
    React.useCallback(() => {
      // console.log('reloadButtonClick')

      if (loading) {
        return
      }

      setLoading(true)

      doFetchOrderListWithCallback(err => {
        if (err) {
          console.log(
            'doFetchOrderListWithCallback err:',
            err.message
          )
        }
        console.log(
          'doFetchOrderListWithCallback'
        )

        setLoading(false)
      })
    }, [loading, doFetchOrderListWithCallback])

  const reloadButton = React.useMemo(() => {
    return {
      text: loading ? 'Loading' : 'D.C.',
      click: reloadButtonClick,
    }
  }, [loading, reloadButtonClick])

  React.useEffect(() => {
    if (!init) {
      return
    }
    setInit(false)
    doClearOrderList()
    reloadButtonClick()
  }, [init, reloadButtonClick, doClearOrderList])

  return (
    <Box m={2}>
      <Calendar
        locale="zh-tw"
        defaultAllDay
        allDayText="menu"
        contentHeight="auto"
        customButtons={{
          reloadButton,
        }}
        plugins={[dayGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today reloadButton',
          center: 'title',
          right: 'dayGridMonth,listMonth',
        }}
        views={{
          dayGridMonth: {},
          listMonth: {
            buttonText: 'list month',
          },
        }}
        events={events}
      />
    </Box>
  )
}

export default PageOrder
