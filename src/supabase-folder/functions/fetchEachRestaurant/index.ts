import { supabase } from '@supabase-folder/client'
import type { DatabaseRestaurantType } from '@supabase-folder/types'

const fetchEachRestaurant = async (
  restaurantId: number
): Promise<DatabaseRestaurantType> => {
  if (!restaurantId) {
    throw new Error('Invalid restaurant id')
  }

  if (restaurantId <= 0) {
    throw new Error('Invalid restaurant id')
  }

  const { data, error } = await supabase
    .from('restaurants')
    .select()
    .eq('id', restaurantId)
    .limit(1)
    .single()

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no restaurant list')
  }

  return data
}

export default fetchEachRestaurant
