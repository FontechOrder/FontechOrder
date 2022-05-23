import type { SupabaseRealtimePayload } from '@supabase/supabase-js'

import type { Flatten } from '@other-support/types'

export type PostgrestFilterBuilderEqualDefaultType<
  U
> = {
  id: U[keyof U]
  eqString: keyof U
}

export type PostgrestFilterBuilderEqualType<
  U extends object
> =
  | PostgrestFilterBuilderEqualDefaultType<U>
  | {
      id: any
      eqString: keyof Flatten<U>
    }

export type RealtimePayloadCallback<T> = (
  payload: SupabaseRealtimePayload<T>
) => void

export type RestaurantRealtimePayloadCallback = (
  payload: SupabaseRealtimePayload<DatabaseRestaurantType>
) => void

export type DATABASETABLENAME =
  | 'menu_item_options'
  | 'menu_items'
  | 'order_items'
  | 'orders'
  | 'restaurants'
  | 'users'

// Storage
export type StorageMenuType = {
  id: string
  name: string
  publicURL: string
}

export type StorageMenuListType =
  Array<StorageMenuType>

// Database
export interface NumberIdInterface {
  id: number
}

export type NumberIdType = NumberIdInterface

export interface NoIdDatabaseMenuItemOptionInterface {
  cost: number
  type?: string
  name: string
}

export interface DatabaseMenuItemOptionInterface
  extends NoIdDatabaseMenuItemOptionInterface,
    NumberIdInterface {}

export type NoIdDatabaseMenuItemOptionType =
  NoIdDatabaseMenuItemOptionInterface & {
    menu_item: number
    restaurant: number
  }

export interface NoIdDatabaseMenuItemInterface {
  name: string
  hidden: boolean
  cost: number
  type?: string
}
export interface DatabaseMenuItemInterface
  extends NoIdDatabaseMenuItemInterface,
    NumberIdInterface {}

export type NoIdDatabaseMenuItemType =
  NoIdDatabaseMenuItemInterface & {
    restaurant: number
  }

export interface NoIdDatabaseOrderItemInterface {
  note?: string
  quantity: number
  cost: number
  item_name: string
  item_type?: string
}

export interface DatabaseOrderItemInterface
  extends NoIdDatabaseOrderItemInterface,
    NumberIdInterface {}

export type NoIdDatabaseOrderItemType =
  NoIdDatabaseOrderItemInterface & {
    user: number
    order: number
    restaurant: number
  }

export interface NoIdDatabaseOrderInterface {
  date_text: string
  finish: boolean
}
export interface DatabaseOrderInterface
  extends NoIdDatabaseOrderInterface,
    NumberIdInterface {}

export interface NoIdDatabaseRestaurantInterface {
  hidden: boolean
  image_url?: string
  name: string
}
export interface DatabaseRestaurantInterface
  extends NoIdDatabaseRestaurantInterface,
    NumberIdInterface {}

export type NoIdDatabaseRestaurantType =
  NoIdDatabaseRestaurantInterface

export interface NoIdDatabaseUserInterface {
  name: string
  email?: string
  type?: string
}

export interface DatabaseUserInterface
  extends NoIdDatabaseUserInterface,
    NumberIdInterface {}

// WithNumber
type WithNumberIdType<T> = NumberIdType & T

export type DatabaseMenuItemOptionType =
  WithNumberIdType<NoIdDatabaseMenuItemOptionType>
export type DatabaseMenuItemType =
  WithNumberIdType<NoIdDatabaseMenuItemType>
export type DatabaseOrderItemType =
  WithNumberIdType<NoIdDatabaseOrderItemType>

export type DatabaseRestaurantType =
  WithNumberIdType<NoIdDatabaseRestaurantType>

// List
export type DatabaseMenuItemOptionListType =
  Array<DatabaseMenuItemOptionType>
export type DatabaseMenuItemListType =
  Array<DatabaseMenuItemType>
export type DatabaseOrderItemListType =
  Array<DatabaseOrderItemType>
export type DatabaseRestaurantListType =
  Array<DatabaseRestaurantType>

// Custom
export interface RestaurantMenuWithItemOptionType
  extends DatabaseMenuItemType {
  itemOptions: DatabaseMenuItemOptionListType
}

export type RestaurantMenuWithItemOptionListType =
  Array<RestaurantMenuWithItemOptionType>

export interface EachOrderInterface
  extends DatabaseOrderInterface {
  restaurant: DatabaseRestaurantInterface
}

export interface EachOrderItemDataInterface
  extends DatabaseOrderItemInterface {
  order: EachOrderInterface
  user: DatabaseUserInterface
  restaurant: number
}

export interface MenuItemOptionInterface
  extends NoIdDatabaseMenuItemOptionInterface {
  menu_item: NoIdDatabaseMenuItemInterface &
    NumberIdInterface
  restaurant: NoIdDatabaseRestaurantInterface &
    NumberIdInterface
}

export interface MenuItemWithItemOptionInterface
  extends DatabaseMenuItemInterface {
  itemOptions: Array<NoIdDatabaseMenuItemOptionInterface>
}

// OptionType
interface OptionMenuWithItemOptionInterface
  extends RestaurantMenuWithItemOptionType {
  sectionTitle: string
  title: string
}

interface OptionMenuItemOptionInterface
  extends DatabaseMenuItemOptionType {
  sectionTitle: string
  title: string
}

type OptionType =
  | OptionMenuWithItemOptionInterface
  | OptionMenuItemOptionInterface

export type OptionListType = Array<OptionType>

export type OrderItemQuantityType = 1 | 2 | 3

export interface OrderItemInterface {
  note?: string
  quantity: OrderItemQuantityType
  option: OptionType
}

export interface NewOrderItemInterface
  extends Omit<OrderItemInterface, 'option'> {
  option: OptionType | null
}
