import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import type { ImageProps } from 'next/image'

import GetAppIcon from '@mui/icons-material/GetApp'

interface ZoomImageWithRelativeParentProps
  extends ImageProps {
  alt: string
  withNewTabLink?: boolean
}

const ZoomImageWithRelativeParent: React.FC<
  ZoomImageWithRelativeParentProps
> = ({
  withNewTabLink = true,
  alt = 'zoom-image',
  ...props
}) => {
  return (
    <>
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
      {withNewTabLink &&
        typeof props.src === 'string' && (
          <div className="absolute top-0 right-0 bg-white bg-opacity-30 shadow-md">
            <a
              target="_blank"
              rel="noreferrer"
              href={props.src}
            >
              <GetAppIcon fontSize="large" />
            </a>
          </div>
        )}
    </>
  )
}

export default ZoomImageWithRelativeParent
