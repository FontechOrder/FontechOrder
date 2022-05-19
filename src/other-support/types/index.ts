import { ReactNode } from 'react'

export type EmptyCallback = () => void

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

export type EmailPasswordObject = {
  email: string
  password: string
}

export type OptionalWithout<T, K> = Pick<
  T,
  Exclude<keyof T, K>
>
export type OptionalTupleUnion<
  U extends string,
  R extends string[] = []
> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : OptionalTupleUnion<Exclude<U, S>, [...R, S]>
}[U] &
  string[]

type CreateRestaurantMenuObject = {
  hidden: boolean
  name: string
  cost: number
  type?: string
}

type CreateRestaurantMenuOptionObject = {
  name: string
  cost: number
  type: string
}

export type CreateRestaurantMenuSchemaType = {
  menuItems: Array<
    CreateRestaurantMenuObject & {
      menuItemOptions: Array<
        OptionalWithout<
          CreateRestaurantMenuOptionObject,
          'type'
        >
      >
    }
  >
}

type GeneralObject = {
  [k: string | number | symbol]: any
}

export type Flatten<T extends object> =
  object extends T
    ? object
    : {
        [K in keyof T]-?: (
          x: NonNullable<T[K]> extends infer V
            ? V extends object
              ? V extends readonly any[]
                ? Pick<T, K>
                : Flatten<V> extends infer FV
                ? {
                    [P in keyof FV as `${Extract<
                      K,
                      string | number
                    >}.${Extract<
                      P,
                      string | number
                    >}`]: FV[P]
                  }
                : never
              : Pick<T, K>
            : never
        ) => void
      } extends Record<
        keyof T,
        (y: infer O) => void
      >
    ? O extends GeneralObject
      ? { [K in keyof O]: O[K] }
      : never
    : never
