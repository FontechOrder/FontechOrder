import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

import { FirebaseNewMenuImageFormItemType } from '@firebase-folder/types'
import { FirebaseNewMenuImageFormItemKeyType } from '@firebase-folder/enums'

import uploadStorageImagePromise from '@firebase-folder/functions/uploadStorageImagePromise'

const initialValues: FirebaseNewMenuImageFormItemType =
  {
    [FirebaseNewMenuImageFormItemKeyType.name]:
      '',
    [FirebaseNewMenuImageFormItemKeyType.file]:
      undefined,
  }

const validationSchema = Yup.object().shape({
  name: Yup.string().required('本欄位為必填'),
  file: Yup.mixed().required('File is required'),
})

const NewMenuImageForm = () => {
  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString] = React.useState('')
  const [result, setResult] = React.useState<
    'success' | 'failed' | undefined
  >(undefined)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      if (!values.file) {
        return
      }

      if (isSubmitting) {
        return
      }
      setIsSubmitting(true)

      // console.log('NewMenuImageForm values: ', values)
      try {
        uploadStorageImagePromise({
          path: '/menus/' + values.name,
          file: values.file,
        })

        setResult('success')
      } catch {
        setResult('failed')
      }

      setIsSubmitting(false)
    },
  })

  if (result) {
    return <div>result: {result}</div>
  }

  return (
    <div>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex-1 md:pr-3">
            <FormikFormInput
              inputProps={{
                id: FirebaseNewMenuImageFormItemKeyType.name,
                name: FirebaseNewMenuImageFormItemKeyType.name,
                placeholder: 'Restaurant Name',
                type: 'text',
                onChange: formik.handleChange,
                value:
                  formik.values[
                    FirebaseNewMenuImageFormItemKeyType
                      .name
                  ],
              }}
              label="name*"
              showError={
                !!(
                  formik.touched[
                    FirebaseNewMenuImageFormItemKeyType
                      .name
                  ] &&
                  formik.errors[
                    FirebaseNewMenuImageFormItemKeyType
                      .name
                  ]
                )
              }
              errorString={
                formik.errors[
                  FirebaseNewMenuImageFormItemKeyType
                    .name
                ]
              }
            />
            <div className="py-4 text-black">
              <input
                id={
                  FirebaseNewMenuImageFormItemKeyType.file
                }
                name={
                  FirebaseNewMenuImageFormItemKeyType.file
                }
                type="file"
                onChange={e => {
                  const file = e.target.files?.[0]
                  if (!file) {
                    return
                  }

                  if (!file.name) {
                    return
                  }

                  formik.setFieldValue(
                    FirebaseNewMenuImageFormItemKeyType.file,
                    file,
                    true
                  )

                  if (
                    formik.values[
                      FirebaseNewMenuImageFormItemKeyType
                        .name
                    ]
                  ) {
                    return
                  }

                  formik.setFieldValue(
                    FirebaseNewMenuImageFormItemKeyType.name,
                    file.name
                  )
                }}
              />
              {formik.errors[
                FirebaseNewMenuImageFormItemKeyType
                  .file
              ] && (
                <p className="text-red-500">
                  {
                    formik.errors[
                      FirebaseNewMenuImageFormItemKeyType
                        .file
                    ]
                  }
                </p>
              )}
            </div>
          </div>
        </div>
        {errorString && <p>{errorString}</p>}
        <CustomButton
          disabled={isSubmitting}
          type="submit"
        >
          確認送出
        </CustomButton>
      </form>
    </div>
  )
}

export default NewMenuImageForm
