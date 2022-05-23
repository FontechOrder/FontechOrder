import fetchDataDefault from '@supabase-folder/fetchData/default'

import { DatabaseOrderInterface } from '@supabase-folder/types'

export const fetchOrderList = async (): Promise<
  Array<DatabaseOrderInterface>
> => {
  const data =
    await fetchDataDefault<DatabaseOrderInterface>(
      {
        databaseString: 'orders',
      }
    )

  return data
}

export default fetchOrderList
