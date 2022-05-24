import type { BaseDatabaseOrderItemInterface } from '@supabase-folder/types'

import postgrestFilterDelete from '@supabase-folder/postgrestFilter/delete'

export const deleteOrderItems = async ({
  orderId,
  userId,
}: {
  orderId: number
  userId: number
}): Promise<boolean> => {
  const { error } =
    await postgrestFilterDelete<BaseDatabaseOrderItemInterface>(
      {
        databaseString: 'order_items',
      }
    )
      .eq('order_id', orderId)
      .eq('user_id', userId)

  if (error) {
    console.log('error: ', error?.message)
    throw error
  }

  return true
}

export default deleteOrderItems
