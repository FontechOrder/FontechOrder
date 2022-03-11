import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import PaginationComponent from '@components/PaginationComponent'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'
import CustomLink from '@components/CustomLink'
// import ZoomImageWithSize from '@components/ZoomImageWithSize'
import MenuImageRectangleView from '@components/MenuImageRectangleView'

import { FirebaseNewRestaurantFormItemType } from '@firebase-folder/types'
import { FirebaseNewRestaurantFormItemKeyType } from '@firebase-folder/enums'

import { StorageImageType } from '@other-support/Types'

// import { sleep } from '@other-support/Consts'

import getStorageImagesMaxHundredPromise from '@firebase-folder/functions/getStorageImagesMaxHundredPromise'
import setFireStoreDocPromise from '@firebase-folder/functions/setFireStoreDocPromise'

import usePagination from '@other-support/Hooks/usePagination'

const initialValues: FirebaseNewRestaurantFormItemType =
  {
    [FirebaseNewRestaurantFormItemKeyType.hidden]:
      false,
    [FirebaseNewRestaurantFormItemKeyType.name]:
      '',
    [FirebaseNewRestaurantFormItemKeyType.imageUrl]:
      '',
  }

const validationSchema = Yup.object().shape({
  hidden: Yup.boolean(),
  name: Yup.string().required('本欄位為必填'),
  imageUrl: Yup.string(),
})

const NewRestaurantForm = () => {
  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [resultText, setResultText] =
    React.useState('')
  const [menuImages, setMenuImages] =
    React.useState<StorageImageType[]>([])

  const [paginationText, setPaginationText] =
    React.useState('')

  const [selectedMenuName, setSelectedMenuName] =
    React.useState('')

  const {
    currentPage,
    setCurrentPage,
    paginationCount,
    totalCount,
    setTotalCount,
    maxCurrentPage,
    disabledPrev,
    disabledNext,
    prevPaginationButtonPress,
    nextPaginationButtonPress,
  } = usePagination({
    getPaginationCount: 6,
  })

  const [errorString] = React.useState('')

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      // console.log('NewRestaurantForm values: ', values)
      try {
        await setFireStoreDocPromise({
          path: '/restaurants/' + values.name,
          data: values,
        })

        setResultText('success')
      } catch (error) {
        if (error instanceof Error) {
          console.log('error: ', error.message)
          return
        }

        setResultText('Error')
      }

      setIsSubmitting(false)
    },
  })

  const getDownloadURLs =
    React.useCallback(() => {
      const asyncGetDownloadURLs = async () => {
        try {
          const downloadURLs =
            await getStorageImagesMaxHundredPromise(
              {
                path: '/menus',
              }
            )
          setMenuImages(downloadURLs)
          setTotalCount(downloadURLs.length)
        } catch {}
      }

      asyncGetDownloadURLs()
    }, [setTotalCount])

  React.useEffect(() => {
    getDownloadURLs()
  }, [getDownloadURLs])

  const updatePaginationText = (
    paginationText: string
  ) => {
    setPaginationText(paginationText)
  }

  const updateCurrentPage = (
    newCurrentPage: number
  ) => {
    setCurrentPage(newCurrentPage)
  }

  const filteredMenuImages = React.useMemo(() => {
    if (!menuImages) {
      return []
    }

    const sliceNumberStart =
      (currentPage - 1) * paginationCount

    const sliceNumberEnd =
      sliceNumberStart + paginationCount <
      totalCount
        ? sliceNumberStart + paginationCount
        : totalCount

    return menuImages.slice(
      sliceNumberStart,
      sliceNumberEnd
    )
  }, [
    currentPage,
    paginationCount,
    totalCount,
    menuImages,
  ])

  if (resultText) {
    return <div>{resultText}</div>
  }

  return (
    <div>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-end">
            <div
              className="mr-4 text-gray-800"
              onClick={() => {
                setSelectedMenuName('')
                formik.setFieldValue(
                  FirebaseNewRestaurantFormItemKeyType.imageUrl,
                  '',
                  false
                )
              }}
            >
              已選菜單：{selectedMenuName}
            </div>
            <CustomButton
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting
                ? 'isSubmitting...'
                : '新增餐廳'}
            </CustomButton>
          </div>
          <div className="flex-1 md:pr-3">
            <label className="flex flex-row items-center">
              <input
                name={
                  FirebaseNewRestaurantFormItemKeyType.hidden
                }
                type="checkbox"
                onChange={formik.handleChange}
                checked={
                  formik.values[
                    FirebaseNewRestaurantFormItemKeyType
                      .hidden
                  ]
                }
              />
              <div className="pl-2 text-gray-600">
                是否隱藏
              </div>
            </label>
            <FormikFormInput
              inputProps={{
                id: FirebaseNewRestaurantFormItemKeyType.name,
                name: FirebaseNewRestaurantFormItemKeyType.name,
                placeholder: 'Restaurant Name',
                type: 'text',
                onChange: formik.handleChange,
                value:
                  formik.values[
                    FirebaseNewRestaurantFormItemKeyType
                      .name
                  ],
              }}
              label="name*"
              showError={
                !!(
                  formik.touched[
                    FirebaseNewRestaurantFormItemKeyType
                      .name
                  ] &&
                  formik.errors[
                    FirebaseNewRestaurantFormItemKeyType
                      .name
                  ]
                )
              }
              errorString={
                formik.errors[
                  FirebaseNewRestaurantFormItemKeyType
                    .name
                ]
              }
            />
          </div>
        </div>
        {errorString && <p>{errorString}</p>}
      </form>
      <div className="bg-white">
        <CustomLink
          title="新增菜單圖"
          linkProps={{
            href: `/restaurant/create/menu-image`,
            as: `${process.env.pathPrefix}/restaurant/create/menu-image`,
          }}
        />
        <div className="flex flex-row flex-wrap justify-center text-gray-400">
          {filteredMenuImages.map(
            (menuImage, index) => (
              <MenuImageRectangleView
                key={`menu-image-container-${currentPage}-${index}`}
                storageImage={menuImage}
              >
                <label className="flex flex-row items-center p-4">
                  <input
                    name={
                      FirebaseNewRestaurantFormItemKeyType.imageUrl
                    }
                    type="radio"
                    onChange={() => {
                      formik.setFieldValue(
                        FirebaseNewRestaurantFormItemKeyType.imageUrl,
                        menuImage.downloadURL,
                        false
                      )

                      setSelectedMenuName(
                        menuImage.name
                      )
                    }}
                    value={menuImage.downloadURL}
                    checked={
                      formik.values[
                        FirebaseNewRestaurantFormItemKeyType
                          .imageUrl
                      ] === menuImage.downloadURL
                    }
                  />
                  <div className="pl-2 text-gray-600">
                    {menuImage.name}
                  </div>
                </label>
              </MenuImageRectangleView>
            )
          )}
        </div>
        {totalCount ? (
          <PaginationComponent
            className="bg-gray-300 text-gray-800"
            currentPage={currentPage}
            paginationText={paginationText}
            updatePaginationText={
              updatePaginationText
            }
            updateCurrentPage={updateCurrentPage}
            maxCurrentPage={maxCurrentPage}
            disabledPrev={disabledPrev}
            prevPaginationButtonPress={
              prevPaginationButtonPress
            }
            disabledNext={disabledNext}
            nextPaginationButtonPress={
              nextPaginationButtonPress
            }
          />
        ) : null}
      </div>
    </div>
  )
}

export default NewRestaurantForm
