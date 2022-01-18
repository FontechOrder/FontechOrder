import {
  FirebaseAuthFormItemKeyType,
  FirebaseNewRestaurantFormItemKeyType,
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
