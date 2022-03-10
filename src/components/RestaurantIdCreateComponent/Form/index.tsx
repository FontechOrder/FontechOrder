import React from 'react'
import classnames from 'classnames'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import type { FormikHelpers } from 'formik'
import type { DocumentDataSnapshot } from '@firebase-folder/types'

import setFireStoreDocPromise from '@firebase-folder/functions/setFireStoreDocPromise'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

import type { NoIdMenuItemForInput } from '@other-support/Types'
import { NoIdMenuItemStringKeys } from '@other-support/Types'
import {
  sleep,
  convertBooleanString,
} from '@other-support/Consts'

const createRestaurantCreateInputName = (
  index: number,
  text: string
) => `restaurant-create-input-${index}-${text}`

type CreateRestaurantMenuItemType = {
  menuItems: NoIdMenuItemForInput[]
}

const initialNoIdMenuItem: NoIdMenuItemForInput =
  {
    hidden: 'false',
    name: '',
    cost: 0,
    type: '',
  }

const noIdNoHiddenMenuItemInputs = [
  {
    supportText: NoIdMenuItemStringKeys.NAME,
    type: 'text',
    label: '名稱*',
    placeholder: '名稱 (string)',
  },
  {
    supportText: NoIdMenuItemStringKeys.COST,
    type: 'number',
    label: '價格*',
    placeholder: '價格*',
  },
  {
    supportText: NoIdMenuItemStringKeys.TYPE,
    type: 'text',
    label: '類別*',
    placeholder: '類別 (string)',
  },
]
const initialValues: CreateRestaurantMenuItemType =
  {
    menuItems: [
      initialNoIdMenuItem,
      initialNoIdMenuItem,
      initialNoIdMenuItem,
    ],
  }

const validationSchema = Yup.object()
  .shape({
    menuItems: Yup.array()
      .of(
        Yup.object().shape({
          [NoIdMenuItemStringKeys.HIDDEN]:
            Yup.boolean(),
          [NoIdMenuItemStringKeys.NAME]:
            Yup.string().required('本欄位為必填'),
          [NoIdMenuItemStringKeys.COST]:
            Yup.number()
              .integer('請輸入整數')
              .min(10, '至少10元')
              .max(150, '不可超過150元')
              .required('本欄位為必填'),
          [NoIdMenuItemStringKeys.TYPE]:
            Yup.string(),
        })
      )
      .required('Required'),
  })
  .required('Required')

const RestaurantIdCreateComponentFrom = ({
  restaurantDoc,
}: {
  restaurantDoc: DocumentDataSnapshot
}) => {
  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString, setErrorString] =
    React.useState('')

  const formikOnSubmitWithCallback =
    React.useCallback(
      (
        values: CreateRestaurantMenuItemType,
        formikHelpers: FormikHelpers<CreateRestaurantMenuItemType>,
        callback: () => void
      ) => {
        const asyncFormikOnSubmit = async () => {
          setIsSubmitting(true)
          try {
            const filterMenuItems =
              values.menuItems.map(each => ({
                ...each,
                hidden: each.hidden === 'true',
              }))

            const menuItemResponses =
              await Promise.all(
                filterMenuItems.map(
                  async menuItem => {
                    try {
                      await setFireStoreDocPromise(
                        {
                          documentReference:
                            restaurantDoc.ref,
                          path:
                            'menuItems/' +
                            menuItem.name,
                          data: menuItem,
                        }
                      )

                      return {
                        status: 'fulfilled',
                        name: menuItem.name,
                      }
                    } catch {
                      return {
                        status: 'rejected',
                        name: menuItem.name,
                      }
                    }
                  }
                )
              )

            const successString = 'success'

            const parseErrorString =
              menuItemResponses.reduce<string>(
                (result, item) => {
                  if (
                    item.status === 'fulfilled'
                  ) {
                    return result
                  }

                  if (result === successString) {
                    return (
                      'fail with: ' + item.name
                    )
                  }

                  return result + ', ' + item.name
                },
                successString
              )

            if (
              parseErrorString === successString
            ) {
              formikHelpers.resetForm()
            } else {
              const newMenuItems =
                values.menuItems.reduce(
                  (result, item, index) => {
                    if (
                      menuItemResponses[index]
                        .status === 'fulfilled'
                    ) {
                      return result
                    }

                    return [...result, item]
                  },
                  Array<NoIdMenuItemForInput>()
                )

              formikHelpers.setFieldValue(
                'menuItems',
                newMenuItems,
                false
              )
            }

            setErrorString(parseErrorString)

            await sleep(1000)

            setErrorString('')
            setIsSubmitting(false)
            callback()
          } catch (error) {
            setErrorString('Login failed')
            await sleep(2000)

            setErrorString('')
            setIsSubmitting(false)
            callback()
          }
        }

        asyncFormikOnSubmit()
      },
      [restaurantDoc]
    )

  const formikOnSubmit = React.useCallback(
    (
      values: CreateRestaurantMenuItemType,
      formikHelpers: FormikHelpers<CreateRestaurantMenuItemType>
    ) => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      formikOnSubmitWithCallback(
        values,
        formikHelpers,
        () => {
          setIsSubmitting(false)
        }
      )
    },
    [isSubmitting, formikOnSubmitWithCallback]
  )

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: formikOnSubmit,
  })

  const hasError = React.useMemo(() => {
    return Object.keys(formik.errors).length !== 0
  }, [formik.errors])

  return (
    <div>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <div className="flex-1 md:pr-3">
            {formik.values.menuItems.map(
              (value, index) => {
                const hiddenInputName =
                  createRestaurantCreateInputName(
                    index,
                    'hidden'
                  )

                return (
                  <div
                    className="flex flex-row items-center"
                    key={`restaurant-create-input-${index}`}
                  >
                    <label className="mr-2 flex flex-row items-center">
                      <input
                        name={hiddenInputName}
                        type="checkbox"
                        onChange={() => {
                          // updateFieldValue(
                          //   index,
                          //   {
                          //     ...value,
                          //     hidden:
                          //       convertBooleanString(
                          //         value.hidden
                          //       ),
                          //   }
                          // )
                          const newMenuItems = [
                            ...formik.values
                              .menuItems,
                          ]
                          newMenuItems[index] = {
                            ...value,
                            hidden:
                              convertBooleanString(
                                value.hidden
                              ),
                          }
                          formik.setFieldValue(
                            'menuItems',
                            newMenuItems,
                            false
                          )
                        }}
                        checked={
                          value.hidden === 'true'
                        }
                      />
                      <div className="pl-2 text-gray-600">
                        是否隱藏
                      </div>
                    </label>

                    {noIdNoHiddenMenuItemInputs.map(
                      (each, eachIndex) => (
                        <FormikFormInput
                          key={`mnuItemInput-${index}-${eachIndex}`}
                          inputProps={{
                            id: createRestaurantCreateInputName(
                              index,
                              each.supportText
                            ),
                            name: createRestaurantCreateInputName(
                              index,
                              each.supportText
                            ),
                            placeholder:
                              each.placeholder,
                            type: each.type,
                            onChange: e => {
                              const newMenuItems =
                                [
                                  ...formik.values
                                    .menuItems,
                                ]
                              newMenuItems[
                                index
                              ] = {
                                ...value,
                                [each.supportText]:
                                  e.target.value,
                              }
                              formik.setFieldValue(
                                'menuItems',
                                newMenuItems,
                                true
                              )
                            },
                            value:
                              formik.values
                                .menuItems[
                                index
                              ]?.[
                                each.supportText
                              ],
                          }}
                          label={each.label}
                          showError={
                            !!(
                              // (
                              //   formik.touched
                              //     .menuItems as any[]
                              // )?.[index]?.[
                              //   each.supportText
                              // ] &&
                              (
                                formik.errors
                                  .menuItems as any[]
                              )?.[index]?.[
                                each.supportText
                              ]
                            )
                          }
                          // errorString={
                          //   formik.errors[
                          //     index
                          //   ]?.[each.supportText]
                          // }
                          errorString={
                            (
                              formik.errors
                                .menuItems as any[]
                            )?.[index]?.[
                              each.supportText
                            ]
                          }
                        />
                      )
                    )}

                    <div className="justfy-center mr-2 mb-2 flex h-10 w-10">
                      {index > 0 && (
                        <div
                          className={classnames(
                            'ml-2 flex h-10 w-10 items-center justify-center bg-blue-600 text-white',
                            formik.values
                              .menuItems.length >
                              9 && 'bg-gray-700'
                          )}
                          onClick={() => {
                            // console.log('press -')
                            formik.setFieldValue(
                              'menuItems',

                              [
                                ...formik.values.menuItems.slice(
                                  0,
                                  index
                                ),
                                ...formik.values.menuItems.slice(
                                  index + 1
                                ),
                              ],
                              true
                            )
                          }}
                        >
                          -
                        </div>
                      )}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={classnames(
              'mr-4 flex h-10 w-10 items-center justify-center bg-blue-600 text-white',
              formik.values.menuItems.length >
                9 && 'bg-gray-700'
            )}
            onClick={() => {
              // console.log('press +')
              formik.setFieldValue(
                'menuItems',
                [
                  ...formik.values.menuItems,
                  initialNoIdMenuItem,
                ],
                true
              )
            }}
          >
            +
          </div>
          <div>
            <CustomButton
              disabled={isSubmitting || hasError}
              type="submit"
            >
              確認送出
            </CustomButton>
            {errorString && <p>{errorString}</p>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default RestaurantIdCreateComponentFrom
