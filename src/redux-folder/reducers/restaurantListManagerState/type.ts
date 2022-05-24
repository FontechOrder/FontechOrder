import type { DatabaseRestaurantInterface } from '@supabase-folder/types'

export type RestaurantListManagerStateType = {
  restaurantList: Array<DatabaseRestaurantInterface>
}

export enum RESTAURANT_LIST_STRING {
  SAVE_RESTAURANT_LIST = 'SAVE_RESTAURANT_LIST',
  CLEAR_RESTAURANT_LIST = 'CLEAR_RESTAURANT_LIST',
}

interface RestaurantListManagerBaseActionType {
  type: RESTAURANT_LIST_STRING
}

interface RestaurantListManagerShowRestaurantListActionType
  extends RestaurantListManagerBaseActionType {
  type: RESTAURANT_LIST_STRING.SAVE_RESTAURANT_LIST
  restaurantList: Array<DatabaseRestaurantInterface>
}

interface RestaurantListManagerHideRestaurantListActionType
  extends RestaurantListManagerBaseActionType {
  type: RESTAURANT_LIST_STRING.CLEAR_RESTAURANT_LIST
}

export type RestaurantListManagerActionTypes =
  | RestaurantListManagerShowRestaurantListActionType
  | RestaurantListManagerHideRestaurantListActionType
