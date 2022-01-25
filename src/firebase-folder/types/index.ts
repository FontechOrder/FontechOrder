import type {
  Firestore as FirebaseFirestore,
  DocumentData as FirebaseDocumentData,
  DocumentSnapshot,
  DocumentReference,
  QueryConstraint,
  FirestoreError as FirebaseFirebaseDocumentData,
} from 'firebase/firestore'

import {
  FirebaseAuthFormItemKeyType,
  FirebaseNewRestaurantFormItemKeyType,
  FirebaseNewOrderFormItemKeyType,
  FirebaseNewMenuImageFormItemKeyType,
  FirebaseNewRestaurantMenuItemFormItemKeyType,
} from '@firebase-folder/enums'

export type Firestore = FirebaseFirestore
export type DocumentData = FirebaseDocumentData
export type FirestoreError =
  FirebaseFirebaseDocumentData

export type DocumentDataSnapshot =
  DocumentSnapshot<DocumentData>

export type DocumentDataSnapshotArray =
  Array<DocumentDataSnapshot>

export type DocumentDataSnapshotReference =
  DocumentReference<DocumentDataSnapshot>

export type DocumentDataReference =
  DocumentReference<DocumentData>

export type QueryConstraintArray =
  Array<QueryConstraint>

export type DocumentSnapshotWithDataObject = {
  doc: DocumentSnapshot
  data: DocumentData
}

export type DocumentSnapshotWithDataObjectList =
  Array<DocumentSnapshotWithDataObject>

export type OrderItemDocumentSnapshotWithDataObject =
  {
    user: DocumentSnapshotWithDataObject
    menuItem: DocumentSnapshotWithDataObject
  }

export type OrderItemDocumentSnapshotWithDataObjectList =
  Array<OrderItemDocumentSnapshotWithDataObject>

export type FirebaseAuthFormItemType = {
  [FirebaseAuthFormItemKeyType.email]: string
  [FirebaseAuthFormItemKeyType.password]: string
}

export type FirebaseNewRestaurantFormItemType = {
  [FirebaseNewRestaurantFormItemKeyType.hidden]: boolean
  [FirebaseNewRestaurantFormItemKeyType.name]: string
  [FirebaseNewRestaurantFormItemKeyType.imageUrl]:
    | string
}

export type FirebaseNewMenuImageFormItemType = {
  [FirebaseNewMenuImageFormItemKeyType.name]: string
  [FirebaseNewMenuImageFormItemKeyType.file]:
    | File
    | undefined
}

export type FirebaseNewOrderFormItemType = {
  [FirebaseNewOrderFormItemKeyType.itemName]: string
  [FirebaseNewOrderFormItemKeyType.cost]: number
  [FirebaseNewOrderFormItemKeyType.userReference]: DocumentDataReference
}

export type FirebaseNewRestaurantMenuItemFormItemType =
  {
    [FirebaseNewRestaurantMenuItemFormItemKeyType.name]: string
    [FirebaseNewRestaurantMenuItemFormItemKeyType.cost]: number
    [FirebaseNewRestaurantMenuItemFormItemKeyType.type]: string
    [FirebaseNewRestaurantMenuItemFormItemKeyType.hidden]:
      | 'true'
      | 'false'
  }

export interface NoIdOrderItem {
  finished: boolean
  ['restaurant-name']?: string
  ['storage-path']?: string
  ['restaurant-reference']?: DocumentDataReference
}

export interface OrderItem extends NoIdOrderItem {
  id: string
}

export interface NoIdOrderItemItem {
  cost: number
  'item-name': string
  ['user-name']?: string
  ['user-reference']?: DocumentDataReference
}

export interface OrderItemItem
  extends NoIdOrderItemItem {
  id: string
}
