import 'react-redux'

import type { RootState } from '../redux-folder/configureStore'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
