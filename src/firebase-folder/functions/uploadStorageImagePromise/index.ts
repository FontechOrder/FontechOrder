import {
  ref,
  uploadBytes,
} from 'firebase/storage'

import { firebaseStorage } from '@firebase-folder/configure'

const uploadStorageImagePromise = async ({
  path,
  file,
}: {
  path: string
  file: File
}): Promise<string> => {
  const storageRef = ref(firebaseStorage, path)

  await uploadBytes(storageRef, file)
  // console.log('snapshot: ', snapshot)
  return file.name
}

export default uploadStorageImagePromise
