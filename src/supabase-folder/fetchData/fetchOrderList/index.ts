import fetchDataDefault from '@supabase-folder/fetchData/default'

import { DatabaseOrderInterface } from '@supabase-folder/types'

export const fetchOrderList = async (): Promise<
  Array<DatabaseOrderInterface>
> =>
  await fetchDataDefault<DatabaseOrderInterface>({
    databaseString: 'orders',
  })

export default fetchOrderList
