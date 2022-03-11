import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import type { LinkProps } from 'next/link'

interface CustomLinkProps {
  isBlank?: boolean
  className?: string | string[]
  title: string
  linkProps: LinkProps
}

const CustomLink = ({
  isBlank = false,
  className,
  title,
  linkProps,
}: CustomLinkProps) => {
  const isBlankObj = isBlank
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  return (
    <div
      className={classnames(
        'p-2 text-blue-800 hover:underline',
        className
      )}
    >
      <Link {...linkProps}>
        <a {...isBlankObj}>{title}</a>
      </Link>
    </div>
  )
}

export default CustomLink
