import { supabase } from '@supabase-folder/client'
import type { DatabaseUserType } from '@supabase-folder/types'

const fetchUserWithEmail = async (
  email?: string
): Promise<DatabaseUserType> => {
  if (!email) {
    throw new Error('Invalid restaurant id')
  }

  const { data, error } = await supabase
    .from<DatabaseUserType>('users')
    .select()
    .eq('email', email)
    .limit(1)
    .single()

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('no restaurant list')
  }

  return data
}

export default fetchUserWithEmail
