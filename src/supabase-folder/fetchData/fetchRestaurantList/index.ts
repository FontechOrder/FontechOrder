import fetchDataDefault from '@supabase-folder/fetchData/default'

import { DatabaseRestaurantInterface } from '@supabase-folder/types'

export const fetchRestaurantList =
  async (): Promise<
    Array<DatabaseRestaurantInterface>
  > =>
    await fetchDataDefault<DatabaseRestaurantInterface>(
      {
        databaseString: 'restaurants',
      }
    )

export default fetchRestaurantList
