import { supabase } from '@supabase-folder/client'
import type {
  DatabaseRestaurantType,
  NoIdDatabaseRestaurantType,
} from '@supabase-folder/types'

const createRestaurants = async (
  restaurants: Array<NoIdDatabaseRestaurantType>
): Promise<Array<DatabaseRestaurantType>> => {
  const { data, error } = await supabase
    .from<DatabaseRestaurantType>('restaurants')
    .insert(restaurants)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('invalid restaurants')
  }

  return data
}

export default createRestaurants
