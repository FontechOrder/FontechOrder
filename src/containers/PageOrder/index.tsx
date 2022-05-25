import React from 'react'
import { Box } from '@mui/material'

import Calendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'

import useOrderList from '@supabase-folder/hooks/useOrderList'
import useAlertListManager from '@redux-folder/hooks/useAlertListManager'

const PageOrder = () => {
  const {
    isInit,
    isLoading,
    doFetchOrderListWithCallback,
    orderList,
  } = useOrderList()

  const { doAddToAlertList } =
    useAlertListManager()

  const events = React.useMemo(() => {
    if (isLoading) {
      return []
    }

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
  }, [isLoading, orderList])

  const reloadButton = React.useMemo(() => {
    return {
      text: isLoading ? 'Loading' : 'D.C.',
      click: () =>
        doFetchOrderListWithCallback(
          ({ pauseByLoading, error }) => {
            if (pauseByLoading) {
              return
            }

            if (error) {
              // console.log(
              //   'doFetchOrderListWithCallback error:',
              //   error.message
              // )

              doAddToAlertList({
                severity: 'error',
                alertTitle:
                  'fetch orderList error: ' +
                  error.message,
              })
            }
          }
        ),
    }
  }, [
    isLoading,
    doFetchOrderListWithCallback,
    doAddToAlertList,
  ])

  if (isInit) {
    return <Box m={2}> isInit </Box>
  }

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
          dayGridMonth: {
            buttonText: '月',
          },
          listMonth: {
            buttonText: '列表',
          },
        }}
        events={events}
      />
    </Box>
  )
}

export default PageOrder
