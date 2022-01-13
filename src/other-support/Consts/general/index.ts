import type { StringKeyObject } from '@other-support/Types'

import type { Int } from '../../Types'

export const emptyStringKeyObject: StringKeyObject =
  {}

export const roundToInt = (num: number): Int =>
  Math.round(num) as Int

export const forceStyleObjectWithCustomCheck = (
  check?: StringKeyObject | Array<StringKeyObject>
): StringKeyObject => {
  if (!check) {
    return {}
  }

  if (check instanceof Array) {
    return check.reduce(
      (result: StringKeyObject, each: any) => ({
        ...result,
        ...forceStyleObjectWithCustomCheck(each),
      }),
      {}
    )
  }

  return check
}

// stringSplit
const splitAt = (index: Int) => (x: string) =>
  [x.slice(0, index), x.slice(index)]

export const stringSplitAtIndex = (
  str: string,
  index: Int
): string[] => {
  return splitAt(index)(str)
}

// ### string support
export const prefixSubSringByIndex = (
  str: string,
  index: Int
): string => str.substring(0, index)

export const localeCompareSort = (
  a: string,
  b: string
): number => a.localeCompare(b)

export const sleep: (
  ms?: number,
  func?: () => void
) => Promise<void> = async (
  ms = 0,
  func = () => undefined
) => {
  return new Promise<void>(resolve =>
    setTimeout(() => {
      func()
      resolve()
    }, ms)
  )
}

export const UnexpectedErrorString =
  'Unexpected Error'
export const UnexpectedError = new Error(
  UnexpectedErrorString
)

export const returnIntId = (
  id: number | string | string[] | undefined
): number | undefined => {
  if (typeof id === 'number') {
    return id
  }

  if (!id) {
    return
  }

  if (!Array.isArray(id)) {
    return parseInt(id)
  }

  return parseInt(id[0])
}

export const unionArray = <T>({
  currentArray,
  targetArray,
}: {
  currentArray: T[]
  targetArray: T[]
}): T[] =>
  Array.from(
    new Set<T>([
      ...currentArray,
      ...targetArray,
    ]).values()
  )

export const fakeRandomImage = ({
  id = 1,
  width = 200,
  height = 300,
}: {
  id: number
  width: number
  height: number
}): string =>
  `https://picsum.photos/${width}/${height}?random=${id}`
