import React from 'react'
import classnames from 'classnames'
import { FormikErrors } from 'formik'
import type { Argument } from 'classnames'

interface FormikFormInputProps {
  classNameObject?: {
    container?: Argument
    ['lable-input-container']?: Argument
    lable?: Argument
    input?: Argument
    ['error-container']?: Argument
  }
  inputProps: JSX.IntrinsicElements['input']
  label: string
  showError?: string | boolean | undefined
  errorString?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined
}

const FormikFormInput = ({
  classNameObject,
  inputProps = {},
  label,
  showError = false,
  errorString = '',
}: FormikFormInputProps) => {
  return (
    <div
      className={classnames(
        'pb-4',
        classNameObject?.container
      )}
    >
      <div
        className={classnames(
          classNameObject?.[
            'lable-input-container'
          ]
        )}
      >
        <label
          className={classnames(
            'flex-0 mb-2 block text-sm font-bold text-gray-700',
            classNameObject?.lable
          )}
        >
          {label}
        </label>
        <input
          type="text"
          {...inputProps}
          className={classnames(
            'focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none',
            classNameObject?.input
          )}
        />
      </div>

      <div
        className={classnames(
          'text-body-sm my-1 h-4 text-red-500',
          classNameObject?.['error-container'],
          showError && errorString
            ? 'opacity-100'
            : 'opacity-0'
        )}
      >
        {errorString}
      </div>
    </div>
  )
}

export default FormikFormInput
