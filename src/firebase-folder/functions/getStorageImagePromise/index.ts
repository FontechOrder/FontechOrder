import {
  ref,
  getDownloadURL,
} from 'firebase/storage'

import { firebaseStorage } from '@firebase-folder/configure'

const getStorageImagePromise = async ({
  path,
}: {
  path: string
}): Promise<string> => {
  const downloadURL = await getDownloadURL(
    ref(firebaseStorage, path)
  )

  const reg = /&token=.*$/
  const updatedDownloadURL = downloadURL.replace(
    reg,
    ''
  )

  return updatedDownloadURL
}

export default getStorageImagePromise
