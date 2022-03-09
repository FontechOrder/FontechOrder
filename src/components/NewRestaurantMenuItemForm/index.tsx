import React from 'react'
import classnames from 'classnames'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import type { DocumentData } from '@firebase-folder/types'

import useUserManager from '@redux-folder/hooks/useUserManager'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

import { FirebaseNewMenuImageFormItem } from '@firebase-folder/interfaces'
import { FirebaseNewRestaurantMenuItemFormItemType } from '@firebase-folder/types'
import { FirebaseNewRestaurantMenuItemFormItemKeyType } from '@firebase-folder/enums'

import setFireStoreDocPromise from '@firebase-folder/functions/setFireStoreDocPromise'

const inputs: Array<FirebaseNewMenuImageFormItem> =
  [
    {
      id: FirebaseNewRestaurantMenuItemFormItemKeyType.name,
      label: '名稱*',
      type: 'text',
      placeholder: '名稱 (string)',
    },
    {
      id: FirebaseNewRestaurantMenuItemFormItemKeyType.cost,
      label: '價格*',
      type: 'number',
      placeholder: '10~200 (number)',
    },
    {
      id: FirebaseNewRestaurantMenuItemFormItemKeyType.type,
      label: '類別*',
      type: 'text',
      placeholder: '類別 (string)',
    },
  ]

const initialValues: FirebaseNewRestaurantMenuItemFormItemType =
  {
    [FirebaseNewRestaurantMenuItemFormItemKeyType.name]:
      '',
    [FirebaseNewRestaurantMenuItemFormItemKeyType.cost]: 0,
    [FirebaseNewRestaurantMenuItemFormItemKeyType.hidden]:
      'false',
    [FirebaseNewRestaurantMenuItemFormItemKeyType.type]:
      '',
  }

const validationSchema = Yup.object().shape({
  name: Yup.string().required('本欄位為必填'),
  cost: Yup.number()
    .integer('請輸入整數')
    .min(10, '至少10元')
    .max(130, '不可超過130元')
    .required('本欄位為必填'),
  hidden: Yup.boolean(),
  type: Yup.string().required('本欄位為必填'),
})

interface NewRestaurantMenuItemFormProps {
  className?: string | string[]
  restaurantDoc: DocumentData
  resultSuccessCallback?: () => void
}

const NewRestaurantMenuItemForm = ({
  className,
  restaurantDoc,
  resultSuccessCallback,
}: NewRestaurantMenuItemFormProps) => {
  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString] = React.useState('')
  const [result, setResult] = React.useState<
    'success' | 'failed' | undefined
  >(undefined)

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async values => {
      if (isSubmitting) {
        return
      }
      setIsSubmitting(true)

      // console.log(
      //   'restaurantDoc: ',
      //   restaurantDoc
      // )
      // console.log('NewRestaurantMenuItemForm values: ', values)
      const newValues = {
        ...values,
        hidden: values.hidden === 'true',
      }

      try {
        await setFireStoreDocPromise({
          documentReference: restaurantDoc.ref,
          path: 'menuItems/' + values.name,
          data: newValues,
        })

        // console.log(
        //   'setFireStoreDocPromise success'
        // )

        setResult('success')
        formik.resetForm()

        resultSuccessCallback?.()
      } catch (error) {
        // if (error instanceof Error) {
        //   console.log('error: ', error.message)
        // }

        setResult('failed')
      }

      setIsSubmitting(false)
    },
  })

  const {
    isCanWriteFireStoreEmailUser: canShow,
  } = useUserManager()

  if (!canShow) {
    return null
  }

  if (result) {
    return (
      <div onClick={() => setResult(undefined)}>
        result: {result}
      </div>
    )
  }

  return (
    <div className={classnames(className)}>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex-1 md:pr-3">
            {inputs.map(each => (
              <FormikFormInput
                key={`new-restaurant-menu-input-${each.id}`}
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

export default NewRestaurantMenuItemForm
