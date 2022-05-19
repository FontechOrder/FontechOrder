import React from 'react'
import PageContentDefault from '@containers/PageContent/default'

import { Paper, Grid, Box } from '@mui/material'

const Privacy = () => {
  return (
    <PageContentDefault>
      <Box my={2}>
        <Paper>
          <Grid
            container
            spacing={1}
            justifyContent="center"
          >
            <Grid item xs={10}>
              <Box>
                This is Fontech Order Privacy
              </Box>
              <Box>
                This page is for members in
                Fontech.
              </Box>

              <Box>Include:</Box>
              <Box>1. Auth</Box>
              <Box>2. Show Restaurant Infos</Box>
              <Box>
                3. [Core] Show Order Infos
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </PageContentDefault>
  )
}
export default Privacy
