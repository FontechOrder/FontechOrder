import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import type { ImageProps } from 'next/image'

const ZoomImageWithRelativeParent: React.FC<
  ImageProps & { alt: string }
> = ({ alt = 'zoom-image', ...props }) => {
  return (
    <Zoom
      wrapStyle={{
        width: '100%',
        height: '100%',
      }}
    >
      <div className="relative h-full w-full">
        <Image {...props} alt={alt} />
      </div>
    </Zoom>
  )
}

export default ZoomImageWithRelativeParent
