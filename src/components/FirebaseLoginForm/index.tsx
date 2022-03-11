import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'
import GoogleLoginButton from '@components/FirebaseLoginForm/GoogleLoginButton'

import logInThenGetUserPromise from '@firebase-folder/functions/logInThenGetUserPromise'

import { FirebaseAuthFormItem } from '@firebase-folder/interfaces'
import { FirebaseAuthFormItemType } from '@firebase-folder/types'
import { FirebaseAuthFormItemKeyType } from '@firebase-folder/enums'

import { sleep } from '@other-support/Consts'

import useUserManager from '@redux-folder/hooks/useUserManager'

const inputs: Array<FirebaseAuthFormItem> = [
  {
    id: FirebaseAuthFormItemKeyType.email,
    label: 'Email*',
    type: 'text',
    placeholder: 'name@example.com',
  },
  {
    id: FirebaseAuthFormItemKeyType.password,
    label: '密碼*',
    type: 'password',
    placeholder: '請輸入您的密碼',
  },
]

const initialValues: FirebaseAuthFormItemType = {
  [FirebaseAuthFormItemKeyType.email]: '',
  [FirebaseAuthFormItemKeyType.password]: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('無效的電子郵件')
    .required('本欄位為必填'),
  password: Yup.string().required('本欄位為必填'),
})

const FirebaseLoginForm = () => {
  const { doInitUserManager } = useUserManager()

  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString, setErrorString] =
    React.useState('')

  const formikOnSubmitWithCallback =
    React.useCallback(
      (
        values: FirebaseAuthFormItemType,
        callback: () => void
      ) => {
        const asyncFormikOnSubmit = async () => {
          try {
            const user =
              await logInThenGetUserPromise({
                email:
                  values[
                    FirebaseAuthFormItemKeyType
                      .email
                  ],
                password:
                  values[
                    FirebaseAuthFormItemKeyType
                      .password
                  ],
              })

            if (!user) {
              throw new Error('user not found')
            }

            doInitUserManager()
          } catch (error) {
            setErrorString('Login failed')
            await sleep(2000)

            setErrorString('')
            setIsSubmitting(false)
            return
          }
          callback()
        }

        asyncFormikOnSubmit()
      },
      [doInitUserManager]
    )

  const formikOnSubmit = React.useCallback(
    (values: FirebaseAuthFormItemType) => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      formikOnSubmitWithCallback(values, () => {
        setIsSubmitting(false)
      })
    },
    [isSubmitting, formikOnSubmitWithCallback]
  )

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: formikOnSubmit,
  })

  return (
    <div className="flex flex-col">
      <div className="p-4">
        <GoogleLoginButton />
      </div>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div
        // className="flex flex-col md:flex-row"
        >
          <div className="flex-1 md:pr-3">
            {inputs.map(each => (
              <FormikFormInput
                key={`firebase-login-input-${each.id}`}
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
          確認送出
        </CustomButton>
        {errorString && <p>{errorString}</p>}
      </form>
    </div>
  )
}

export default FirebaseLoginForm
