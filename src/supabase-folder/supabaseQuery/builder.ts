import { supabase } from '@supabase-folder/client'
import type { DATABASETABLENAME } from '@supabase-folder/types'

const supabaseQueryBuilder = <U>(
  databaseString: DATABASETABLENAME
) => {
  return supabase.from<U>(databaseString)
}

export default supabaseQueryBuilder
