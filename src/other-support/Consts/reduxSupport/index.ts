import {
  TStateCasses,
  ReactNodeCasses,
  ExtractChildrenType,
} from '../../Types'

import { ReactNode } from 'react'

export const switchCaseTState =
  <C extends { type: any }, TState>(
    cases: TStateCasses<C, TState>
  ) =>
  <D extends (aboutObject: any) => TState>(
    defaultCase: D
  ): {
    <K extends string>(key: K): (
      arg: ExtractChildrenType<C, K>
    ) => TState
  } => {
    return key =>
      Object.prototype.hasOwnProperty.call(
        cases,
        key
      )
        ? cases[key]
        : defaultCase
  }

export const switchCaseReactNode =
  <C extends { type: any }>(
    cases: ReactNodeCasses<C>
  ) =>
  <D extends (action: any) => ReactNode>(
    defaultCase: D
  ): {
    <K extends string>(key: K): (
      arg: ExtractChildrenType<C, K>
    ) => ReactNode
  } => {
    return key =>
      Object.prototype.hasOwnProperty.call(
        cases,
        key
      )
        ? cases[key]
        : defaultCase
  }
