import { supabase } from '@supabase-folder/client'
import type { DATABASETABLENAME } from '@supabase-folder/types'
import type { Flatten } from '@other-support/types'

const fetchDataId = async <
  U extends { [k: string | number | symbol]: any }
>({
  databaseString,
  selectString,
  notNullString = 'id',
  eq: { id, eqString },
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
  notNullString?: string
  eq:
    | {
        id: U[keyof U]
        eqString: keyof U
      }
    | {
        id: any
        eqString: keyof Flatten<U>
      }
}): Promise<U> => {
  if (!id) {
    throw new Error('Invalid id')
  }

  const { data, error } = await supabase
    .from<U>(databaseString)
    .select(selectString)
    .eq(eqString, id)
    .not(notNullString, 'is', 'null')
    .limit(1)
    .single()

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no data')
  }

  return data
}

export default fetchDataId
