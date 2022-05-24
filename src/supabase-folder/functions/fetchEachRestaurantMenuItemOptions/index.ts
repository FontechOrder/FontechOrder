import { supabase } from '@supabase-folder/client'
import type { DatabaseMenuItemOptionListType } from '@supabase-folder/types'

const fetchEachRestaurantMenuItemOptions = async (
  restaurantId: number
): Promise<DatabaseMenuItemOptionListType> => {
  if (!restaurantId) {
    throw new Error('Invalid restaurant id')
  }

  if (restaurantId <= 0) {
    throw new Error('Invalid restaurant id')
  }

  const { data, error } = await supabase
    .from('menu_item_options')
    .select()
    .eq('restaurant_id', restaurantId)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no restaurant list')
  }

  return data
}

export default fetchEachRestaurantMenuItemOptions
