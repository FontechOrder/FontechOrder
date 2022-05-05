import {
  RestaurantListManagerStateType,
  RESTAURANT_LIST_STRING,
  RestaurantListManagerActionTypes,
} from '@redux-folder/reducers/restaurantListManagerState/type'

import { switchCaseTState } from '@other-support/consts'

const initRestaurantListManagerState: RestaurantListManagerStateType =
  {
    restaurantList: [],
  }

const restaurantListManagerState = (
  state = initRestaurantListManagerState,
  action: RestaurantListManagerActionTypes
): RestaurantListManagerStateType => {
  const reducer = switchCaseTState<
    RestaurantListManagerActionTypes,
    RestaurantListManagerStateType
  >({
    [RESTAURANT_LIST_STRING.SAVE_RESTAURANT_LIST]:
      eachAction => ({
        restaurantList: eachAction.restaurantList,
      }),
    [RESTAURANT_LIST_STRING.CLEAR_RESTAURANT_LIST]:
      () => initRestaurantListManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default restaurantListManagerState
