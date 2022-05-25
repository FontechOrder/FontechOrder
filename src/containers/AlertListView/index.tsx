import React from 'react'
import {
  Alert,
  AlertTitle,
  IconButton,
  Stack,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import useAlertListManagerWithReduceTimer from '@redux-folder/hooks/useAlertListManager/withReduceTimer'

const AlertListView = () => {
  const { doRemoveFromAlertList, alertList } =
    useAlertListManagerWithReduceTimer()

  return (
    <Stack
      className="absolute top-0 left-0 right-0 z-[2] m-auto p-2 lg:w-[64rem] lg:max-w-[64rem]"
      spacing={2}
    >
      {alertList.map((alert, index) => (
        <Alert
          key={`each-alert-${index}`}
          severity={alert.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() =>
                doRemoveFromAlertList(index)
              }
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>
            {alert.severity}
          </AlertTitle>
        </Alert>
      ))}
    </Stack>
  )
}

export default AlertListView
