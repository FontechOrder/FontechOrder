import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

// target="_blank"
//       rel="noreferrer"
interface CustomLinkProps {
  isBlank?: boolean
  className?: string | string[]
  title: string
  path: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
  isBlank = false,
  className,
  title,
  path,
}) => {
  const isBlankObj = isBlank
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  return (
    <div
      className={classnames(
        className,
        'text-blue-800',
        'hover:underline',
        'p-2'
      )}
    >
      <Link href={path}>
        <a {...isBlankObj}>{title}</a>
      </Link>
    </div>
  )
}

export default CustomLink
