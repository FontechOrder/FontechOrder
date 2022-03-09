import React from 'react'
import classnames from 'classnames'
import { FormikErrors } from 'formik'

interface FormikFormInputProps {
  className?: string
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
  className,
  inputProps = {},
  label,
  showError = false,
  errorString = '',
}: FormikFormInputProps) => {
  return (
    <div className="pb-4">
      <div className={className}>
        <label className="flex-0 mb-2 block text-sm font-bold text-gray-700">
          {label}
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          {...inputProps}
        />
      </div>

      <div
        className={classnames(
          'text-body-sm my-1 h-4 text-red-500',
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
