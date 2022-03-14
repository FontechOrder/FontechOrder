import React from 'react'
import Select from 'react-select'

import type {
  DocumentData,
  DocumentDataSnapshot,
  DocumentSnapshotWithDataObject,
  DocumentSnapshotWithDataObjectList,
} from '@firebase-folder/types'

import CustomButton from '@components/CustomButton'

import {
  sleep,
  getFontechEmail,
} from '@other-support/Consts'

import getFireStoreDocPromise from '@firebase-folder/functions/getFireStoreDocPromise'
import useFirebaseAuth from '@firebase-folder/hooks/useFirebaseAuth'

import addFireStoreDocPromise from '@firebase-folder/functions/addFireStoreDocPromise'

interface NewMenuItemToOrderFormProps {
  orderDoc: DocumentDataSnapshot
  menuItems: DocumentSnapshotWithDataObjectList
  updateOrderMenuItem?: () => void
}

const NewMenuItemToOrderForm = ({
  orderDoc,
  menuItems,
  updateOrderMenuItem,
}: NewMenuItemToOrderFormProps) => {
  const { isFirst, firebaseAuthUser } =
    useFirebaseAuth()

  const [
    guestName,
    // setGuestName
  ] = React.useState<string | undefined>(
    undefined
  )

  const [
    isGuest,
    // setIsGuest
  ] = React.useState(false)

  const [
    selectedMenuItemDoc,
    setSelectedMenuItemDoc,
  ] = React.useState<
    DocumentSnapshotWithDataObject | undefined
  >(undefined)

  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [result, setResult] = React.useState<
    'success' | 'failed' | undefined
  >(undefined)

  const asyncGetOrderUser = async () => {
    if (isGuest) {
      if (!guestName) {
        throw new Error('is Guest')
      }

      const userDoc =
        await getFireStoreDocPromise({
          path: 'users/' + guestName,
        })

      return userDoc
    }

    const userEmail = getFontechEmail(
      firebaseAuthUser?.email
    )

    if (!userEmail) {
      throw new Error('user not found.')
    }

    const userDoc = await getFireStoreDocPromise({
      path: 'users/' + userEmail,
    })

    return userDoc
  }

  const asyncNewMenuItemToOrderAction =
    async () => {
      setIsSubmitting(true)

      try {
        if (!selectedMenuItemDoc) {
          throw new Error(
            'No selecte menuItemDoc'
          )
        }

        const orderUser =
          await asyncGetOrderUser()

        const document: DocumentData = {
          'menu-item-reference':
            selectedMenuItemDoc.doc.ref,
          'user-reference': orderUser.ref,
          note: '',
        }

        await addFireStoreDocPromise({
          documentReference: orderDoc.ref,
          path: 'items',
          data: document,
        })

        setResult('success')
        updateOrderMenuItem?.()
      } catch (error) {
        setResult('failed')
      }

      await sleep(1000)

      setIsSubmitting(false)
    }

  if (isFirst) {
    return <div>Prepare....</div>
  }

  if (result) {
    return (
      <div onClick={() => setResult(undefined)}>
        result: {result}
      </div>
    )
  }

  if (menuItems.length === 0) {
    return <div>No menu item can order.</div>
  }

  return (
    <div>
      <div className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="min-w-[10rem]">
          <Select
            options={menuItems.map(each => ({
              value: each,
              label: `${each.data.name} ${each.data.cost}`,
            }))}
            onChange={newValue => {
              if (!newValue) {
                setSelectedMenuItemDoc(undefined)
                return
              }

              setSelectedMenuItemDoc(
                newValue.value
              )
            }}
          />
        </div>
        <CustomButton
          disabled={
            !selectedMenuItemDoc || isSubmitting
          }
          onClick={() =>
            asyncNewMenuItemToOrderAction()
          }
        >
          {isSubmitting
            ? '傳送中...'
            : '確認送出'}
        </CustomButton>
      </div>
    </div>
  )
}

export default NewMenuItemToOrderForm
