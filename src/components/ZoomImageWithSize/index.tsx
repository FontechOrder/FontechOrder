import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import type { ImageProps } from 'next/image'

const ZoomImageWithSize: React.FC<
  ImageProps & { alt: string }
> = ({ alt = 'zoom-image', ...props }) => {
  return (
    <Zoom>
      <Image {...props} alt={alt} />
    </Zoom>
  )
}

export default ZoomImageWithSize
