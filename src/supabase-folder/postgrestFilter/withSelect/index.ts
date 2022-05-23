import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import type { DATABASETABLENAME } from '@supabase-folder/types'

import supabaseQueryBuilder from '@supabase-folder/supabaseQuery/builder'

const postgrestFilterWithSelect = <U>({
  databaseString,
  selectString,
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
}): PostgrestFilterBuilder<U> => {
  return supabaseQueryBuilder<U>(
    databaseString
  ).select(selectString)
}

export default postgrestFilterWithSelect
