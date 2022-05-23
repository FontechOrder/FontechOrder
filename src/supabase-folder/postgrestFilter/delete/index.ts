import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import type { DATABASETABLENAME } from '@supabase-folder/types'

import supabaseQueryBuilder from '@supabase-folder/supabaseQuery/builder'

const postgrestFilterDelete = <T>({
  databaseString,
}: {
  databaseString: DATABASETABLENAME
}): PostgrestFilterBuilder<T> => {
  return supabaseQueryBuilder<T>(
    databaseString
  ).delete()
}

export default postgrestFilterDelete
