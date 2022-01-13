import { FirebaseAuthFormItemKeyType } from '@firebase-folder/enums'

interface FormItem {
  label: string
  type: string
  placeholder?: string
}

export interface FirebaseAuthFormItem
  extends FormItem {
  id: FirebaseAuthFormItemKeyType
}
