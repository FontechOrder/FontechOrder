import React from 'react'

import getStorageImagePromise from '@firebase-folder/functions/getStorageImagePromise'

const useGetStorageImagePromise = (
  slackImage?: string
) => {
  const [src, setSrc] = React.useState<
    string | undefined
  >(undefined)
  const [result, setResult] = React.useState<
    'fail' | 'success' | undefined
  >(undefined)

  React.useEffect(() => {
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
      .catch(() => {
        setResult('fail')
      })
  }, [slackImage])

  return { src, result }
}

export default useGetStorageImagePromise
