import type { PostgrestFilterBuilderEqualType } from '@supabase-folder/types'

import fetchDataEach from '@supabase-folder/fetchData/each'

import { EachOrderItemDataInterface } from '@supabase-folder/types'

export const fetchOrderItemList = async ({
  selectString = '*,user(id,name,email),order!inner(id,restaurant!inner(id))',
  eqs = [],
}: {
  selectString?: string
  eqs?: Array<
    PostgrestFilterBuilderEqualType<EachOrderItemDataInterface>
  >
}): Promise<
  Array<EachOrderItemDataInterface>
> => {
  const orderItems =
    await fetchDataEach<EachOrderItemDataInterface>(
      {
        databaseString: 'order_items',
        selectString,
        eqs,
      }
    )

  // console.log('fetchEachOrder order: ', order)

  return orderItems
}

export default fetchOrderItemList
