import React from 'react'
import Image from 'next/image'

import useGetStorageImagePromise from '@firebase-folder/hooks/useGetStorageImagePromise'

import { AsyncStoragePathImageProps } from '@firebase-folder/interfaces'

const AsyncStoragePathImageLink: React.FC<
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
    <a
      className="relative w-full h-full hover-none"
      href={src}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        priority
        layout="fill"
        objectFit="contain"
        src={src}
        alt={alt}
      />
    </a>
  )
}

export default AsyncStoragePathImageLink
