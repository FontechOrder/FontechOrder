import { supabase } from '@supabase-folder/client'
import type {
  DatabaseRestaurantListType,
  DatabaseRestaurantType,
} from '@supabase-folder/types'

const fetchRestaurantList =
  async (): Promise<DatabaseRestaurantListType> => {
    const { data, error } = await supabase
      .from<DatabaseRestaurantType>('restaurants')
      .select()

    if (error) {
      throw error
    }

    if (!data) {
      throw new Error('no restaurant list')
    }

    return data
  }

export default fetchRestaurantList
