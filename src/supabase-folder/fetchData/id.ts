import type {
  DATABASETABLENAME,
  PostgrestFilterBuilderEqualType,
} from '@supabase-folder/types'

import postgrestFilterWithSelect from '@supabase-folder/postgrestFilter/withSelect'

const fetchDataId = async <
  U extends { [k: string | number | symbol]: any }
>({
  databaseString,
  selectString,
  notNullString = 'id',
  eqs = [],
}: {
  databaseString: DATABASETABLENAME
  selectString?: string
  notNullString?: string
  eqs: Array<PostgrestFilterBuilderEqualType<U>>
}): Promise<U> => {
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
