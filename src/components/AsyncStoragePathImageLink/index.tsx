import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import useGetStorageImagePromise from '@firebase-folder/hooks/useGetStorageImagePromise'

import { AsyncStoragePathImageProps } from '@firebase-folder/interfaces'

const AsyncStoragePathImageLink: React.FC<
  AsyncStoragePathImageProps
> = ({
  className,
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
      className={classnames(
        'relative w-full h-full hover-none',
        className
      )}
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
