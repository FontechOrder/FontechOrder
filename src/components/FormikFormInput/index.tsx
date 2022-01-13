import React from 'react'
import classNames from 'classnames'
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

const FormikFormInput: React.FC<
  FormikFormInputProps
> = ({
  className,
  inputProps = {},
  label,
  showError = false,
  errorString = '',
}) => {
  return (
    <div className="pb-8">
      <div className={className}>
        <label className="flex-0 block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...inputProps}
        />
      </div>

      <div
        className={classNames(
          'text-red-500 text-body-sm h-4 my-1',
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
