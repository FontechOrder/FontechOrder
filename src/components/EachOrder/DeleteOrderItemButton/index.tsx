import React from 'react'

import { LoadingButton } from '@mui/lab'

import useUserManager from '@redux-folder/hooks/useUserManager'

import { deleteOrderItems } from '@supabase-folder/deleteData'

interface EachOrderDeleteOrderItemButtonProps {
  orderId: number
  recallEachOrder: () => boolean
}

const EachOrderDeleteOrderItemButton: React.FC<
  EachOrderDeleteOrderItemButtonProps
> = ({ orderId, recallEachOrder }) => {
  const { user } = useUserManager()
  const [isLoading, setIsLoading] =
    React.useState(false)

  if (!user) {
    return null
  }

  return (
    <LoadingButton
      loading={isLoading}
      onClick={() => {
        const asyncDeleteOrderItems =
          async () => {
            if (isLoading) {
              return
            }
            setIsLoading(true)
            try {
              await deleteOrderItems({
                orderId,
                userId: user.id,
              })

              recallEachOrder()
            } catch {
              console.log(
                'asyncDeleteOrderItems error'
              )
            }
            setIsLoading(false)
          }
        asyncDeleteOrderItems()
      }}
    >
      DELETEORDERMENUITEM
    </LoadingButton>
  )
}

export default EachOrderDeleteOrderItemButton
