import React from 'react'

import CustomLink from '@components/CustomLink'

import useUserManager from '@redux-folder/hooks/useUserManager'

const NewRestaruantsLink = () => {
  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  if (!canShow) {
    return null
  }

  return (
    <CustomLink
      className="flex justify-end"
      title="新增點菜"
      linkProps={{
        href: `/restaurant/create`,
        as: `${process.env.pathPrefix}/restaurant/create`,
      }}
    />
  )
}

export default NewRestaruantsLink
