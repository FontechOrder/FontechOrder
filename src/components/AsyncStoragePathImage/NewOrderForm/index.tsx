import React from 'react'
// import * as Yup from 'yup'
// import { useFormik } from 'formik'

// import FormikFormInput from '@components/FormikFormInput'
// import CustomButton from '@components/CustomButton'

// import { FirebaseNewOrderFormItem } from '@firebase-folder/interfaces'
// import { FirebaseNewOrderFormItemType } from '@firebase-folder/types'
// import { FirebaseNewOrderFormItemKeyType } from '@firebase-folder/enums'

// import useOrdersFirestore from '@firebase-folder/hooks/useOrdersFirestore'

// import { sleep } from '@other-support/Consts'

// const inputs: Array<FirebaseNewOrderFormItem> = [
//   {
//     id: FirebaseNewOrderFormItemKeyType.itemName,
//     label: '名稱*',
//     type: 'text',
//     placeholder: '請輸入餐廳名稱',
//   },
//   {
//     id: FirebaseNewOrderFormItemKeyType.cost,
//     label: '價格',
//     type: 'number',
//     placeholder: '請輸入在slack上的圖片路徑',
//   },
//   {
//     id: FirebaseNewOrderFormItemKeyType.userReference,
//     label: 'Storage Path',
//     type: 'text',
//     placeholder:
//       '請輸入在Firebase Storage上的圖片路徑',
//   },
// ]

// const initialValues: FirebaseNewOrderFormItemType =
//   {
//     [FirebaseNewOrderFormItemKeyType.name]: '',
//     [FirebaseNewOrderFormItemKeyType.slackImage]:
//       '',
//     [FirebaseNewOrderFormItemKeyType.storagePath]:
//       '',
//   }

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('本欄位為必填'),
//   slackImage: Yup.string(),
//   storagePath: Yup.string(),
// })

const NewOrderForm: React.FC = () => {
  // const { newOrder } = useOrdersFirestore()

  // const [isSubmitting, setIsSubmitting] =
  //   React.useState(false)

  // const [errorString, setErrorString] =
  //   React.useState('')

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: async values => {
  //     if (isSubmitting) {
  //       return
  //     }

  //     setIsSubmitting(true)

  //     try {
  //       await newOrder({
  //         hidden: false,
  //         name: values[
  //           FirebaseNewOrderFormItemKeyType.name
  //         ],
  //         'slack-image':
  //           values[
  //             FirebaseNewOrderFormItemKeyType
  //               .slackImage
  //           ],
  //         'storage-path':
  //           values[
  //             FirebaseNewOrderFormItemKeyType
  //               .storagePath
  //           ],
  //       })

  //       formik.setValues(initialValues)
  //     } catch (error) {
  //       setErrorString('Login failed')
  //       await sleep(2000)

  //       setErrorString('')
  //       setIsSubmitting(false)
  //       return
  //     }

  //     setIsSubmitting(false)
  //   },
  // })

  // return (
  //   <div>
  //     <form
  //       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  //       onSubmit={formik.handleSubmit}
  //     >
  //       <div>
  //         <div className="flex-1 md:pr-3">
  //           {inputs.map(each => (
  //             <FormikFormInput
  //               key={`contact-us-form-input-${each.id}`}
  //               // className="flex flex-row my-1 md:my-2"
  //               inputProps={{
  //                 id: each.id,
  //                 name: each.id,
  //                 placeholder: each.placeholder,
  //                 type: each.type,
  //                 onChange: formik.handleChange,
  //                 value: formik.values[each.id],
  //               }}
  //               label={each.label}
  //               showError={
  //                 !!(
  //                   formik.touched[each.id] &&
  //                   formik.errors[each.id]
  //                 )
  //               }
  //               errorString={
  //                 formik.errors[each.id]
  //               }
  //             />
  //           ))}
  //         </div>
  //       </div>
  //       <CustomButton type="submit">
  //         新增餐廳
  //       </CustomButton>
  //       {errorString && <p>{errorString}</p>}
  //     </form>
  //   </div>
  // )
  return <div>NewOrderForm</div>
}

export default NewOrderForm
