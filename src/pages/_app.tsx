import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-medium-image-zoom/dist/styles.css'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

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
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
