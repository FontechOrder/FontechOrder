import fetchDataId from '@supabase-folder/fetchData/id'

import { EachOrderInterface } from '@supabase-folder/types'

export const fetchEachOrder = async (
  orderId: number
): Promise<EachOrderInterface> => {
  const order =
    await fetchDataId<EachOrderInterface>({
      databaseString: 'orders',
      selectString:
        '*,restaurant(id,hidden,image_url,name)',
      eqs: [
        {
          id: orderId,
          eqString: 'id',
        },
      ],
    })

  // console.log('fetchEachOrder order: ', order)

  return order
}

export default fetchEachOrder
