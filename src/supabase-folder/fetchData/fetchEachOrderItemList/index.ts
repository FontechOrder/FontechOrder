import { fetchOrderItemList } from '@supabase-folder/fetchData'

import { EachOrderItemDataInterface } from '@supabase-folder/types'

export const fetchEachOrderItemList = async (
  orderId: number,
  restaurantId: number
): Promise<Array<EachOrderItemDataInterface>> => {
  return await fetchOrderItemList({
    selectString:
      '*,user:user_id(id,name,email),order:order_id(id,restaurant:restaurant_id(id))',
    eqs: [
      {
        id: orderId,
        eqString: 'order.id',
      },
      {
        id: restaurantId,
        eqString: 'order.restaurant.id',
      },
    ],
  })
}

export default fetchEachOrderItemList
