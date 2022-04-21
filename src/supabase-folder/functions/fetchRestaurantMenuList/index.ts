import { supabase } from '@supabase-folder/client'
import type {
  DatabaseMenuItemListType,
  DatabaseMenuItemType,
} from '@supabase-folder/types'

const fetchRestaurantMenuList = async (
  restaurantId: number
): Promise<DatabaseMenuItemListType> => {
  const { data, error } = await supabase
    .from<DatabaseMenuItemType>('menu_items')
    .select()
    .eq('restaurant', restaurantId)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no menu_item list')
  }

  return data
}

export default fetchRestaurantMenuList
