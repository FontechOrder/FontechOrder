import { supabase } from '@supabase-folder/client'
// import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'

import type { DATABASETABLENAME } from '@supabase-folder/types'
import type { Flatten } from '@other-support/types'

const fetchDataEach = async <
  U extends { [k: string | number | symbol]: any }
>({
  databaseString,
  selectString,
  eq: { id, eqString },
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
  eq:
    | {
        id: U[keyof U]
        eqString: keyof U
      }
    | {
        id: any
        eqString: keyof Flatten<U>
      }
}): Promise<Array<U>> => {
  if (!id) {
    throw new Error('Invalid id')
  }

  const { data, error } = await supabase
    .from<U>(databaseString)
    .select(selectString)
    .eq(eqString, id)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no data')
  }

  return data
}

export default fetchDataEach
