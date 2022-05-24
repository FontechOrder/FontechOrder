import type {
  OptionalWithout,
  OptionalTupleUnion,
} from '@other-support/types'

import type {
  DatabaseMenuItemType,
  NoIdDatabaseMenuItemType,
  NoIdDatabaseMenuItemOptionType,
} from '@supabase-folder/types'

export const adminUsers = [
  'jason@fontech.com.tw',
  'service@fontech.com.tw',
]

export const allKeysOfDatabaseMenuItemSchema: OptionalTupleUnion<
  keyof OptionalWithout<
    OptionalWithout<
      DatabaseMenuItemType,
      'restaurant_id'
    >,
    'hidden'
  >
> = ['id', 'name', 'cost', 'type']

// export const allKeysOfNoIdDatabaseMenuItemSchema: OptionalTupleUnion<
//   keyof OptionalWithout<
//     OptionalWithout<
//       NoIdDatabaseMenuItemType,
//       'restaurant'
//     >,
//     'hidden'
//   >
// > = ['name', 'cost', 'type']

type keyOfNoIdDatabaseMenuItemType =
  keyof OptionalWithout<
    OptionalWithout<
      NoIdDatabaseMenuItemType,
      'restaurant_id'
    >,
    'hidden'
  >

type MenuItemFieldListType = {
  [S in keyOfNoIdDatabaseMenuItemType]: {
    key: S
    required: boolean
    type?: React.HTMLInputTypeAttribute
    label: string
  }
}

// export const allKeysOfNoIdDatabaseMenuItemSchema: MenuItemFieldListType =
//   {
//     name: {
//       required: true,
//       label: 'Name',
//     },
//     cost: {
//       required: true,
//       type: 'number',
//       label: 'Cost',
//     },
//     type: {
//       required: false,
//       label: 'Type',
//     },
//   }

type valueof<T> = T[keyof T]
type ValueOfMenuItemFieldListType =
  valueof<MenuItemFieldListType>[]

export const allKeysOfNoIdDatabaseMenuItemSchema: ValueOfMenuItemFieldListType =
  [
    {
      key: 'name',
      required: true,
      label: 'Name',
    },
    {
      key: 'cost',
      required: true,
      type: 'number',
      label: 'Cost',
    },
    {
      key: 'type',
      required: false,
      label: 'Type',
    },
  ]

type keyOfNoIdDatabaseMenuItemOptionType =
  keyof OptionalWithout<
    OptionalWithout<
      OptionalWithout<
        NoIdDatabaseMenuItemOptionType,
        'menu_item_id'
      >,
      'restaurant_id'
    >,
    'type'
  >

// export const allKeysOfNoIdDatabaseMenuItemOptionSchema: OptionalTupleUnion<keyOfNoIdDatabaseMenuItemOptionType> =
//   ['name', 'cost', 'type']

type MenuItemOptionFieldListType = {
  [S in keyOfNoIdDatabaseMenuItemOptionType]: {
    key: S
    required: boolean
    type?: React.HTMLInputTypeAttribute
    label: string
  }
}

type ValueOfMenuItemOptionFieldListType =
  valueof<MenuItemOptionFieldListType>[]

export const allKeysOfNoIdDatabaseMenuItemOptionSchema: ValueOfMenuItemOptionFieldListType =
  [
    {
      key: 'name',
      required: true,
      label: 'Name',
    },
    {
      key: 'cost',
      required: true,
      type: 'number',
      label: 'Cost',
    },
  ]
