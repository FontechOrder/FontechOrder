import React from 'react'

import CustomLink from '@components/CustomLink'

import useUserManager from '@redux-folder/hooks/useUserManager'

import { forceStringForNextRouterQueryFirst } from '@other-support/Consts'

const NewRestaurantMenuItemsLink = ({
  id,
}: {
  id: string | string[] | undefined
}) => {
  const idText = React.useMemo(() => {
    return forceStringForNextRouterQueryFirst(id)
  }, [id])

  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  if (!canShow) {
    return null
  }

  if (!idText) {
    return null
  }

  return (
    <CustomLink
      className="flex justify-end"
      title="新增菜單項目"
      linkProps={{
        href: `/restaurant/[id]/create?id=${idText}`,
        as: `${process.env.pathPrefix}/restaurant/[id]/create?id=${idText}`,
        // as: `${process.env.pathPrefix}/restaurant/${idText}/create`,
      }}
    />
  )
}

export default NewRestaurantMenuItemsLink
