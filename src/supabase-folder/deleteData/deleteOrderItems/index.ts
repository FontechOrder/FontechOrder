import type { EachOrderItemDataInterface } from '@supabase-folder/types'

import postgrestFilterDelete from '@supabase-folder/postgrestFilter/delete'

import { fetchOrderItemList } from '@supabase-folder/fetchData'

export const deleteOrderItems = async ({
  orderId,
  userId,
}: {
  orderId: number
  userId: number
}): Promise<boolean> => {
  const filteredOrderItemList =
    await fetchOrderItemList({
      selectString:
        '*,user!inner(id,name,email),order!inner(id,restaurant!inner(id))',
      eqs: [
        {
          id: orderId,
          eqString: 'order.id',
        },
        {
          id: userId,
          eqString: 'user.id',
        },
      ],
    })

  const ids = filteredOrderItemList.reduce(
    (result, each) => [...result, each.id],
    Array<number>()
  )

  const { error } =
    await postgrestFilterDelete<EachOrderItemDataInterface>(
      {
        databaseString: 'order_items',
      }
    ).filter('id', 'in', `(${ids})`)

  if (error) {
    console.log('error: ', error?.message)
    throw error
  }

  return true
}

export default deleteOrderItems
