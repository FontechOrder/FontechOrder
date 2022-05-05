import { supabase } from '@supabase-folder/client'
import type {
  NoIdDatabaseOrderInterface,
  DatabaseOrderInterface,
} from '@supabase-folder/types'

const createOrders = async (
  orders: Array<NoIdDatabaseOrderInterface>
): Promise<Array<DatabaseOrderInterface>> => {
  const { data, error } = await supabase
    .from<DatabaseOrderInterface>('orders')
    .insert(orders)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('invalid orders')
  }

  return data
}

export default createOrders
