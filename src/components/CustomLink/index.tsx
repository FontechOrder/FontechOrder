import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

interface CustomLinkProps {
  isBlank?: boolean
  className?: string | string[]
  title: string
  path: string
}

const CustomLink = ({
  isBlank = false,
  className,
  title,
  path,
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
      <Link
        href={path}
        as={`${process.env.pathPrefix}${path}`}
      >
        <a {...isBlankObj}>{title}</a>
      </Link>
    </div>
  )
}

export default CustomLink
