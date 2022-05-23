import type {
  DATABASETABLENAME,
  PostgrestFilterBuilderEqualType,
} from '@supabase-folder/types'

import postgrestFilterWithSelect from '@supabase-folder/postgrestFilter/withSelect'

const fetchDataEach = async <
  U extends { [k: string | number | symbol]: any }
>({
  databaseString,
  selectString,
  eqs = [],
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
  eqs?: Array<PostgrestFilterBuilderEqualType<U>>
}): Promise<Array<U>> => {
  if (eqs.length === 0) {
    throw new Error('Invalid id')
  }

  const postgrestFilterWithEqs = eqs.reduce(
    (result, each) => {
      return result.eq(each.eqString, each.id)
    },
    postgrestFilterWithSelect<U>({
      databaseString,
      selectString,
    })
  )

  const { data, error } =
    await postgrestFilterWithEqs

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no data')
  }

  return data
}

export default fetchDataEach
