import type { StringKeyObject } from '@other-support/types'

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'

import thunk from 'redux-thunk'

import {
  persistStore,
  persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import localDataManagerState from '@redux-folder/reducers/localDataManagerState'
import userManagerState from '@redux-folder/reducers/userManagerState'
import restaurantListManagerState from '@redux-folder/reducers/restaurantListManagerState'
import orderListManagerState from '@redux-folder/reducers/orderListManagerState'
import alertListManagerState from '@redux-folder/reducers/alertListManagerState'

const rootReducer = combineReducers({
  localDataManagerState,
  userManagerState,
  restaurantListManagerState,
  orderListManagerState,
  alertListManagerState,
})

const configureStore = (): StringKeyObject => {
  const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['localDataManagerState'],
  }

  const presistedReducer = persistReducer(
    persistConfig,
    rootReducer
  )

  const store = createStore(
    presistedReducer,
    applyMiddleware(thunk)
  )
  const persistor = persistStore(store)
  return {
    persistor,
    store,
  }
}

export default configureStore

export type RootState = ReturnType<
  typeof rootReducer
>
