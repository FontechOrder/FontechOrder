import type {
  StringKeyObject,
  Int,
  EmptyCallback,
} from '@other-support/types'

export const emptyCallback: EmptyCallback = () =>
  undefined

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
  func?: EmptyCallback
) => Promise<void> = async (
  ms = 0,
  func = () => emptyCallback
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

export const unionArrayFromArrays = <T>(
  arrayList: T[][] = []
): T[] => unionArray(arrayList.flat(1))

export const unionArray = <T>(
  arrayList: T[] = []
): T[] =>
  Array.from(new Set<T>(arrayList).values())

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

export const shuffledWithArrayAndLength = <T>({
  array,
  length = 0,
}: {
  array: T[]
  length: number
}) =>
  [...array]
    .sort(() => 0.5 - Math.random())
    .slice(0, length)

export const forceStringForNextRouterQueryFirst =
  (
    check: string | string[] | undefined
  ): string => {
    if (!check) {
      return ''
    }

    if (Array.isArray(check)) {
      return forceStringForNextRouterQueryFirst(
        check[0]
      )
    }

    return check
  }

export const isArrayInArray = ({
  target,
  compare,
}: {
  target: any[]
  compare: any[]
}): boolean => {
  const targetString = JSON.stringify(target)

  const contains = compare.some((ele: any) => {
    return JSON.stringify(ele) === targetString
  })
  return contains
}

export const isObjectEqualToAnother = ({
  target,
  compare,
}: {
  target: StringKeyObject
  compare: StringKeyObject
}): boolean => {
  const targetKeys = Object.keys(target)
  const compareKeys = Object.keys(compare)

  if (
    isArrayInArray({
      target: targetKeys,
      compare: compareKeys,
    })
  ) {
    return false
  }

  const targetValues = Object.values(target)
  const compareValues = Object.values(compare)

  if (
    isArrayInArray({
      target: targetValues,
      compare: compareValues,
    })
  ) {
    return false
  }

  return true
}

export const shuffle = <T>(array: T[]) =>
  array.slice().reduce((result, _, i) => {
    const index = array.length - 1 - i
    const newIndex = Math.floor(
      Math.random() * (index + 1)
    )

    ;[array[newIndex], array[index]] = [
      array[index],
      array[newIndex],
    ]
    return array
  }, array)

export const sortByTwoString = (
  a: string | undefined,
  b: string | undefined
) => {
  if (!a) {
    return 0
  }

  if (!b) {
    return 0
  }

  if (a < b) return -1
  if (a > b) return 1

  return 0
}

export const isArrayOfStrings = (
  value: any
): boolean =>
  Array.isArray(value) &&
  value.every(item => typeof item === 'string')

export const isNonEmptyArrayOfStrings = (
  value: any
): boolean =>
  isArrayOfStrings(value) && value.length > 0

export const instanceError = (
  error: unknown
): Error | undefined => {
  if (error instanceof Error) {
    return error
  }

  return undefined
}
