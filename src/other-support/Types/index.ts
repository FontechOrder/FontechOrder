import { ReactNode } from 'react'

export type Nullable<T> = T | null

export type Int = number & { __int__: void }

export type ExtractChildrenType<
  TAll extends { type: any },
  P
> = Extract<TAll, { type: P }>

export type TStateCasses<
  T extends { type: any },
  TState
> = {
  [P in T['type']]: (
    action: ExtractChildrenType<T, P>
  ) => TState
}

export type ReactNodeCasses<
  T extends { type: any }
> = {
  [P in T['type']]: (
    action: ExtractChildrenType<T, P>
  ) => ReactNode
}

export type StringKeyObject = { [k: string]: any }
export type StringKeyBooleanValueObject = {
  [k: string]: boolean
}

export type FixedSizeArray<
  N extends number,
  T,
  M extends string = '0'
> = {
  readonly [k in M]: any
} & { length: N } & ReadonlyArray<T>

export type NoIdRestaurantItem = {
  hidden: boolean
  name: string
  ['slack-image']?: string
  ['storage-path']?: string
}

export interface RestaurantItem
  extends NoIdRestaurantItem {
  id: string
}

export interface NoIdMenuItem {
  name: string
  cost: number
  type: string
}

export interface MenuItem extends NoIdMenuItem {
  id: string
}

// export interface NoIdOrderItem {
//   finished: boolean
//   'restaurant-name': string
//   ['storage-path']?: string
// }

// export interface OrderItem extends NoIdOrderItem {
//   id: string
// }
