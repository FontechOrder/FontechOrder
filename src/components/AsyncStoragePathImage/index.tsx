import React from 'react'
import Image from 'next/image'

import getStorageImagePromise from '@firebase-folder/functions/getStorageImagePromise'

interface AsyncStoragePathImageProps {
  slackImage?: string
  alt?: string
}

const AsyncStoragePathImage: React.FC<
  AsyncStoragePathImageProps
> = ({
  slackImage,
  alt = 'async-fill-image',
}) => {
  const [src, setSrc] = React.useState<
    string | undefined
  >(undefined)
  const [result, setResult] = React.useState<
    'fail' | 'success' | undefined
  >(undefined)

  React.useEffect(() => {
    console.log('slackImage: ', slackImage)
    if (!slackImage) {
      return
    }

    getStorageImagePromise({
      path: slackImage,
    })
      .then((downloadURL: string) => {
        setSrc(downloadURL)
        setResult('success')
      })
      .catch((error: Error) => {
        console.log('error: ', error.message)
        setResult('fail')
      })
  }, [slackImage])

  if (!slackImage) {
    return null
  }

  if (result && src) {
    return (
      <Image
        layout="fill"
        objectFit="contain"
        src={src}
        alt={alt}
      />
    )
  }

  return null
}

export default AsyncStoragePathImage
