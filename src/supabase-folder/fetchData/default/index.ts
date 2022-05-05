import { supabase } from '@supabase-folder/client'
import type { DATABASETABLENAME } from '@supabase-folder/types'

const fetchDataDefault = async <U>({
  databaseString,
  selectString,
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
}): Promise<Array<U>> => {
  const { data, error } = await supabase
    .from<U>(databaseString)
    .select(selectString)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no data')
  }

  return data
}

export default fetchDataDefault
