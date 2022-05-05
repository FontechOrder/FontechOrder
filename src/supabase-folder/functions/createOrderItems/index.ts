import { supabase } from '@supabase-folder/client'
import type {
  DatabaseOrderItemType,
  NoIdDatabaseOrderItemType,
} from '@supabase-folder/types'

const createOrderItems = async (
  orders: Array<NoIdDatabaseOrderItemType>
): Promise<Array<DatabaseOrderItemType>> => {
  // console.log('createOrderItems orders:', orders)
  const { data, error } = await supabase
    .from<DatabaseOrderItemType>('order_items')
    .insert(orders)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('invalid orders')
  }

  return data
}

export default createOrderItems
