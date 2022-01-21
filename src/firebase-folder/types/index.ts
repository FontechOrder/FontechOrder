import type {
  DocumentReference,
  DocumentData,
} from 'firebase/firestore'

import {
  FirebaseAuthFormItemKeyType,
  FirebaseNewRestaurantFormItemKeyType,
  FirebaseNewOrderFormItemKeyType,
} from '@firebase-folder/enums'

export type FirebaseAuthFormItemType = {
  [FirebaseAuthFormItemKeyType.email]: string
  [FirebaseAuthFormItemKeyType.password]: string
}

export type FirebaseNewRestaurantFormItemType = {
  [FirebaseNewRestaurantFormItemKeyType.name]: string
  [FirebaseNewRestaurantFormItemKeyType.slackImage]:
    | string
    | undefined
  [FirebaseNewRestaurantFormItemKeyType.storagePath]:
    | string
    | undefined
}

export type FirebaseNewOrderFormItemType = {
  [FirebaseNewOrderFormItemKeyType.itemName]: string
  [FirebaseNewOrderFormItemKeyType.cost]: number
  [FirebaseNewOrderFormItemKeyType.userReference]: DocumentReference<DocumentData>
}

export interface NoIdOrderItem {
  finished: boolean
  ['restaurant-name']?: string
  ['storage-path']?: string
  ['restaurant-reference']?: DocumentReference<DocumentData>
}

export interface OrderItem extends NoIdOrderItem {
  id: string
}

export interface NoIdOrderItemItem {
  cost: number
  'item-name': string
  ['user-name']?: string
  ['user-reference']?: DocumentReference<DocumentData>
}

export interface OrderItemItem
  extends NoIdOrderItemItem {
  id: string
}
