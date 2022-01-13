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
