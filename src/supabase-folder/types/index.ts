import type { SupabaseRealtimePayload } from '@supabase/supabase-js'

export type RealtimePayloadCallback<T> = (
  payload: SupabaseRealtimePayload<T>
) => void

export type RestaurantRealtimePayloadCallback = (
  payload: SupabaseRealtimePayload<DatabaseRestaurantType>
) => void

// Storage
export type StorageMenuType = {
  id: string
  name: string
  publicURL: string
}

export type StorageMenuListType =
  Array<StorageMenuType>

// Database
type NumberIdType = {
  id: number
}

export type NoIdDatabaseMenuItemOptionType = {
  cost: number
  type?: string
  name: string

  menu_item: number
  restaurant: number
}
export type DatabaseMenuItemOptionType =
  NumberIdType & NoIdDatabaseMenuItemOptionType

export type NoIdDatabaseMenuItemType = {
  name: string
  hidden: boolean
  cost: number
  type?: string

  restaurant: number
}
export type DatabaseMenuItemType = NumberIdType &
  NoIdDatabaseMenuItemType

export type NoIdDatabaseOrderItemType = {
  note?: string
  quantity: number

  user: number
  order: number
}
export type DatabaseOrderItemType = NumberIdType &
  NoIdDatabaseOrderItemType

export type NoIdDatabaseOrderType = {
  date_text: string
  finished: boolean

  restaurant: number
}
export type DatabaseOrderType = NumberIdType &
  NoIdDatabaseOrderType

export type NoIdDatabaseRestaurantType = {
  hidden: boolean
  image_url?: string
  name: string
}
export type DatabaseRestaurantType =
  NumberIdType & NoIdDatabaseRestaurantType

export type NoIdDatabaseUserType = {
  name: string
  email?: string
  type?: string
}
export type DatabaseUserType = NumberIdType &
  NoIdDatabaseUserType

export type DatabaseMenuItemOptionListType =
  Array<DatabaseMenuItemOptionType>
export type DatabaseMenuItemListType =
  Array<DatabaseMenuItemType>

export type DatabaseRestaurantListType =
  Array<DatabaseRestaurantType>

// Custom
export interface RestaurantMenuWithItemOptionType
  extends DatabaseMenuItemType {
  itemOptions: DatabaseMenuItemOptionListType
}

export type RestaurantMenuWithItemOptionListType =
  Array<RestaurantMenuWithItemOptionType>
