import { ref, list } from 'firebase/storage'

import { firebaseStorage } from '@firebase-folder/configure'

import getStorageImagePromise from '@firebase-folder/functions/getStorageImagePromise'

import { StorageImageType } from '@other-support/Types'

const getStorageImagesMaxHundredPromise = async ({
  path,
}: {
  path: string
}): Promise<StorageImageType[]> => {
  const listRef = ref(firebaseStorage, path)

  const storageItemRefs = await list(listRef, {
    maxResults: 100,
  })

  const updatedDownloadURLs = Promise.all(
    storageItemRefs.items.map(
      itemRef =>
        new Promise<StorageImageType>(
          (resolve, reject) => {
            getStorageImagePromise({
              path: itemRef.fullPath,
            })
              .then(eachUpdatedDownloadURL => {
                resolve({
                  name: itemRef.name,
                  downloadURL:
                    eachUpdatedDownloadURL,
                })
              })
              .catch(error => reject(error))
          }
        )
    )
  )

  return updatedDownloadURLs
}

export default getStorageImagesMaxHundredPromise
