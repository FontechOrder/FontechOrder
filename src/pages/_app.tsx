import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'

import 'tailwindcss/tailwind.css'
import 'react-medium-image-zoom/dist/styles.css'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { theme } from '@other-support/consts'
import configureStore from '@redux-folder/configureStore'
const { store, persistor } = configureStore()

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate
            loading={null}
            persistor={persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
