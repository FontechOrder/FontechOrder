import {
  FirebaseAuthFormItemKeyType,
  FirebaseNewRestaurantFormItemKeyType,
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
  slackImage?: string
  alt?: string
}
