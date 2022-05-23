import { fetchOrderItemList } from '@supabase-folder/fetchData'

import { EachOrderItemDataInterface } from '@supabase-folder/types'

export const fetchEachOrderItemList = async (
  orderId: number,
  restaurantId: number
): Promise<Array<EachOrderItemDataInterface>> => {
  return await fetchOrderItemList({
    eqs: [
      {
        id: orderId,
        eqString: 'order.id',
      },
      {
        id: restaurantId,
        eqString: 'restaurant',
      },
    ],
  })
}

export default fetchEachOrderItemList
