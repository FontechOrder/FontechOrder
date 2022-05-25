import { supabase } from '@supabase-folder/client'
import type {
  NoIdDatabaseOrderInterface,
  BaseDatabaseOrderInterface,
} from '@supabase-folder/types'

const createOrders = async (
  orders: Array<NoIdDatabaseOrderInterface>
): Promise<Array<BaseDatabaseOrderInterface>> => {
  console.log('createOrders orders: ', orders)

  const { data, error } = await supabase
    .from<BaseDatabaseOrderInterface>('orders')
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
