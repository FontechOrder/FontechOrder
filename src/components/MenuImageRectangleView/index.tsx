import React from 'react'

import ZoomImageWithSize from '@components/ZoomImageWithSize'

import { StorageImageType } from '@other-support/Types'

interface MenuImageRectangleViewProps {
  storageImage: StorageImageType
}

const MenuImageRectangleView: React.FC<
  MenuImageRectangleViewProps
> = ({ storageImage, children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[210px] w-[150px] border">
        {storageImage.downloadURL && (
          <ZoomImageWithSize
            className="border"
            objectFit="contain"
            src={storageImage.downloadURL}
            alt="menu-image"
            width={500}
            height={700}
          />
        )}
      </div>
      {children}
    </div>
  )
}

export default MenuImageRectangleView
