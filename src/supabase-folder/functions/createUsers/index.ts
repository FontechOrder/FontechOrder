import { supabase } from '@supabase-folder/client'
import type {
  DatabaseUserType,
  NoIdDatabaseUserType,
} from '@supabase-folder/types'

const createUsers = async (
  users: Array<NoIdDatabaseUserType>
): Promise<Array<DatabaseUserType>> => {
  const { data, error } = await supabase
    .from<DatabaseUserType>('users')
    .insert(users)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('invalid users')
  }

  return data
}

export default createUsers
