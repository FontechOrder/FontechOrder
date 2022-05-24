import {
  RESTAURANT_LIST_STRING,
  RestaurantListManagerActionTypes,
} from '@redux-folder/reducers/restaurantListManagerState/type'

import type { DatabaseRestaurantInterface } from '@supabase-folder/types'

export const saveRestaurantList = (
  restaurantList: Array<DatabaseRestaurantInterface>
): RestaurantListManagerActionTypes =>
  <RestaurantListManagerActionTypes>{
    type: RESTAURANT_LIST_STRING.SAVE_RESTAURANT_LIST,
    restaurantList,
  }

export const clearRestaurantList =
  (): RestaurantListManagerActionTypes =>
    <RestaurantListManagerActionTypes>{
      type: RESTAURANT_LIST_STRING.CLEAR_RESTAURANT_LIST,
    }
