import { supabase } from '@supabase-folder/client'
import type { DatabaseMenuItemListType } from '@supabase-folder/types'

const fetchEachRestaurantMenus = async (
  restaurantId: number
): Promise<DatabaseMenuItemListType> => {
  if (!restaurantId) {
    throw new Error('Invalid restaurant id')
  }

  if (restaurantId <= 0) {
    throw new Error('Invalid restaurant id')
  }

  const { data, error } = await supabase
    .from('menu_items')
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

export default fetchEachRestaurantMenus
