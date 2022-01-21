import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

import { FirebaseNewRestaurantFormItem } from '@firebase-folder/interfaces'
import { FirebaseNewRestaurantFormItemType } from '@firebase-folder/types'
import { FirebaseNewRestaurantFormItemKeyType } from '@firebase-folder/enums'

import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

import { sleep } from '@other-support/Consts'

const inputs: Array<FirebaseNewRestaurantFormItem> =
  [
    {
      id: FirebaseNewRestaurantFormItemKeyType.name,
      label: '名稱*',
      type: 'text',
      placeholder: '請輸入餐廳名稱',
    },
    {
      id: FirebaseNewRestaurantFormItemKeyType.slackImage,
      label: 'Slack Image',
      type: 'text',
      placeholder: '請輸入在slack上的圖片路徑',
    },
    {
      id: FirebaseNewRestaurantFormItemKeyType.storagePath,
      label: 'Storage Path',
      type: 'text',
      placeholder:
        '請輸入在Firebase Storage上的圖片路徑',
    },
  ]

const initialValues: FirebaseNewRestaurantFormItemType =
  {
    [FirebaseNewRestaurantFormItemKeyType.name]:
      '',
    [FirebaseNewRestaurantFormItemKeyType.slackImage]:
      '',
    [FirebaseNewRestaurantFormItemKeyType.storagePath]:
      '',
  }

const validationSchema = Yup.object().shape({
  name: Yup.string().required('本欄位為必填'),
  slackImage: Yup.string(),
  storagePath: Yup.string(),
})

const NewRestaurantForm: React.FC = () => {
  const { newRestaurant } =
    useRestaurantsFirestore()

  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString, setErrorString] =
    React.useState('')

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      try {
        await newRestaurant({
          hidden: false,
          name: values[
            FirebaseNewRestaurantFormItemKeyType
              .name
          ],
          'slack-image':
            values[
              FirebaseNewRestaurantFormItemKeyType
                .slackImage
            ],
          'storage-path':
            values[
              FirebaseNewRestaurantFormItemKeyType
                .storagePath
            ],
        })

        formik.setValues(initialValues)
      } catch (error) {
        setErrorString('Login failed')
        await sleep(2000)

        setErrorString('')
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
    },
  })

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div
        // className="flex flex-col md:flex-row"
        >
          <div className="flex-1 md:pr-3">
            {inputs.map(each => (
              <FormikFormInput
                key={`contact-us-form-input-${each.id}`}
                // className="flex flex-row my-1 md:my-2"
                inputProps={{
                  id: each.id,
                  name: each.id,
                  placeholder: each.placeholder,
                  type: each.type,
                  onChange: formik.handleChange,
                  value: formik.values[each.id],
                }}
                label={each.label}
                showError={
                  !!(
                    formik.touched[each.id] &&
                    formik.errors[each.id]
                  )
                }
                errorString={
                  formik.errors[each.id]
                }
              />
            ))}
          </div>
        </div>
        <CustomButton type="submit">
          新增餐廳
        </CustomButton>
        {errorString && <p>{errorString}</p>}
      </form>
    </div>
  )
}

export default NewRestaurantForm
