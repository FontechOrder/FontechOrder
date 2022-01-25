import type {
  DocumentData,
  DocumentDataSnapshot,
  DocumentDataReference,
  DocumentSnapshotWithDataObject,
} from '@firebase-folder/types'
import { StorageImageType } from '@other-support/Types'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'

export const getDocumentData = (
  doc?: DocumentDataSnapshot
): DocumentData | undefined => {
  if (!doc) {
    return undefined
  }

  if (!doc.data) {
    return undefined
  }

  return doc.data()
}

export const getReference = ({
  targetDoc = undefined,
  key = '',
}: {
  targetDoc?: DocumentDataSnapshot
  key: string
}): DocumentDataReference | undefined => {
  if (key.length === 0) {
    return
  }

  const data = getDocumentData(targetDoc)

  if (!data) {
    return
  }

  const reference: DocumentDataReference =
    data[key]

  if (!reference?.path) {
    return
  }

  return reference
}

export const getDocFromReference = async ({
  targetDoc = undefined,
  key = '',
}: {
  targetDoc?: DocumentDataSnapshot
  key: string
}): Promise<DocumentDataSnapshot> => {
  const reference = getReference({
    targetDoc,
    key,
  })

  if (!reference) {
    throw new Error('reference not found')
  }

  const doc = await getFireStoreDocPromise({
    path: reference.path,
  })

  return doc
}

export const getDocumentSnapshotWithDataObjects =
  (
    docs?: DocumentDataSnapshot[]
  ): DocumentSnapshotWithDataObject[] => {
    if (!docs) {
      return []
    }

    return docs.reduce((result, doc) => {
      const data = getDocumentData(doc)

      if (!data) {
        return result
      }

      return [
        ...result,
        {
          doc,
          data,
        },
      ]
    }, Array<DocumentSnapshotWithDataObject>())
  }

export const restaurantConventToStorageImageType =
  (
    restaurantDocumentData?: DocumentData
  ): StorageImageType => {
    return {
      name: restaurantDocumentData?.name || '',
      downloadURL:
        restaurantDocumentData?.['image-url'] ||
        '',
    }
  }
