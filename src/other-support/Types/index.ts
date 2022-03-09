import { ReactNode } from 'react'

export type BooleanString = 'true' | 'false'
export type BooleanResult = 'success' | 'failed'

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
  ['image-url']?: string
}

export interface RestaurantItem
  extends NoIdRestaurantItem {
  id: string
}

export interface StorageImageType {
  name: string
  downloadURL: string
}

export enum NoIdMenuItemStringKeys {
  HIDDEN = 'hidden',
  NAME = 'name',
  COST = 'cost',
  TYPE = 'type',
}

export interface NoIdMenuItem {
  [NoIdMenuItemStringKeys.HIDDEN]: boolean
  [NoIdMenuItemStringKeys.NAME]: string
  [NoIdMenuItemStringKeys.COST]: number
  [NoIdMenuItemStringKeys.TYPE]: string
}

export interface NoIdMenuItemForInput {
  [NoIdMenuItemStringKeys.HIDDEN]: BooleanString
  [NoIdMenuItemStringKeys.NAME]: string
  [NoIdMenuItemStringKeys.COST]: number
  [NoIdMenuItemStringKeys.TYPE]: string
}

export interface MenuItem extends NoIdMenuItem {
  id: string
}

export interface NoIdUserItem {
  name: string
  email: string
  hidden: boolean
}

export interface UserItem extends NoIdUserItem {
  id: string
}
