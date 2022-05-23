import type { DATABASETABLENAME } from '@supabase-folder/types'

import postgrestFilterWithSelect from '@supabase-folder/postgrestFilter/withSelect'

const fetchDataDefault = async <U>({
  databaseString,
  selectString,
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
}): Promise<Array<U>> => {
  const { data, error } =
    await postgrestFilterWithSelect<U>({
      databaseString,
      selectString,
    })

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no data')
  }

  return data
}

export default fetchDataDefault
