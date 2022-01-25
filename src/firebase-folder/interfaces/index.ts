import {
  FirebaseAuthFormItemKeyType,
  FirebaseNewRestaurantFormItemKeyType,
  FirebaseNewOrderFormItemKeyType,
  FirebaseNewRestaurantMenuItemFormItemKeyType,
} from '@firebase-folder/enums'

interface FormItem {
  label: string
  type: string
  placeholder?: string
}

export interface FirebaseAuthFormItem
  extends FormItem {
  id: FirebaseAuthFormItemKeyType
}

export interface FirebaseNewRestaurantFormItem
  extends FormItem {
  id: FirebaseNewRestaurantFormItemKeyType
}

export interface AsyncStoragePathImageProps {
  className?: string | string[]
  slackImage?: string
  alt?: string
}

export interface FirebaseNewOrderFormItem
  extends FormItem {
  id: FirebaseNewOrderFormItemKeyType
}

export interface FirebaseNewMenuImageFormItem
  extends FormItem {
  id: FirebaseNewRestaurantMenuItemFormItemKeyType
}
