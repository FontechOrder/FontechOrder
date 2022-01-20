import React from 'react'
import Image from 'next/image'

import useGetStorageImagePromise from '@firebase-folder/hooks/useGetStorageImagePromise'

import { AsyncStoragePathImageProps } from '@firebase-folder/interfaces'

const AsyncStoragePathImage: React.FC<
  AsyncStoragePathImageProps
> = ({
  slackImage,
  alt = 'async-fill-image',
}) => {
  const { src, result } =
    useGetStorageImagePromise(slackImage)

  if (!src) {
    return null
  }

  if (!result) {
    return null
  }

  return (
    <Image
      layout="fill"
      objectFit="contain"
      src={src}
      alt={alt}
    />
  )

  return null
}

export default AsyncStoragePathImage
