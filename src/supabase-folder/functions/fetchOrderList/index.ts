import { supabase } from '@supabase-folder/client'
import type { DatabaseOrderInterface } from '@supabase-folder/types'

const fetchOrderList = async (): Promise<
  Array<DatabaseOrderInterface>
> => {
  const { data, error } = await supabase
    .from<DatabaseOrderInterface>('orders')
    .select()

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no order list')
  }

  return data
}

export default fetchOrderList
