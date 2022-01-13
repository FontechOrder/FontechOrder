import React from 'react'
import classnames from 'classnames'

import type {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react'

const CustomButton: React.FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  return (
    <button
      className={classnames(
        className,
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
        'focus:outline-none',
        'focus:shadow-outline'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton
