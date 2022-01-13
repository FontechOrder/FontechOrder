import { FirebaseAuthFormItemKeyType } from '@firebase-folder/enums'

export type FirebaseAuthFormItemType = {
  [FirebaseAuthFormItemKeyType.email]: string
  [FirebaseAuthFormItemKeyType.password]: string
}
