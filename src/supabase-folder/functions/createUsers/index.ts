import { supabase } from '@supabase-folder/client'
import type {
  DatabaseUserInterface,
  NoIdDatabaseUserInterface,
} from '@supabase-folder/types'

const createUsers = async (
  users: Array<NoIdDatabaseUserInterface>
): Promise<Array<DatabaseUserInterface>> => {
  const { data, error } = await supabase
    .from<DatabaseUserInterface>('users')
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
