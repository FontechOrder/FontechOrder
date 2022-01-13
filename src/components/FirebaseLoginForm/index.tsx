import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import { useDispatch } from 'react-redux'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

// import { saveLocalData } from '@redux-folder/actions/localDataManagerAction'

import logInThenGetUser from '@firebase-folder/functions/logInThenGetUser'

import { FirebaseAuthFormItem } from '@firebase-folder/interfaces'
import { FirebaseAuthFormItemType } from '@firebase-folder/types'
import { FirebaseAuthFormItemKeyType } from '@firebase-folder/enums'

import { sleep } from '@other-support/Consts'

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

const FirebaseLoginForm: React.FC = () => {
  // const dispatch = useDispatch()

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
        const user = await logInThenGetUser({
          email:
            values[
              FirebaseAuthFormItemKeyType.email
            ],
          password:
            values[
              FirebaseAuthFormItemKeyType.password
            ],
        })

        if (!user) {
          throw new Error('user not found')
        }

        //   dispatch(
        //     saveLocalData({
        //       data: {
        //         user,
        //       },
        //     })
        //   )
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
      <div>Update: 2021/12/20 18:08</div>
      <p>請先登入</p>
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
          確認送出
        </CustomButton>
        {errorString && <p>{errorString}</p>}
      </form>
    </div>
  )
}

export default FirebaseLoginForm
