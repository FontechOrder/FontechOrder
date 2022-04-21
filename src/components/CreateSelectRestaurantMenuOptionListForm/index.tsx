import React from 'react'

import { Button, Box, Paper } from '@mui/material'

import type { DatabaseMenuItemType } from '@supabase-folder/types'

import type { EmptyCallback } from '@other-support/types'

const CreateSelectRestaurantMenuOptionListForm =
  ({
    selectRestauramtMenu,
    clearCallback,
  }: {
    selectRestauramtMenu: DatabaseMenuItemType
    clearCallback: EmptyCallback
  }) => {
    return (
      <Paper className="p-2">
        <Button onClick={() => clearCallback()}>
          Clear
        </Button>

        <Box>
          {`CreateSelectRestaurantMenuOptionListForm >> ${selectRestauramtMenu.id}.${selectRestauramtMenu.name}`}
        </Box>
      </Paper>
    )
  }

export default CreateSelectRestaurantMenuOptionListForm
