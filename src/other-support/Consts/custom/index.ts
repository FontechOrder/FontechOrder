import type { User } from '@supabase/supabase-js'
import type { NoIdDatabaseUserType } from '@supabase-folder/types'

import type { BooleanString } from '@other-support/Types'

export const initStringArray = Array<string>()

const FONTECH_EMAIL_TAIL = '@fontech.com.tw'

export const convertAuthUserToDatabaseUser = (
  user: User | undefined
): NoIdDatabaseUserType | undefined => {
  const email = getFontechEmail(user?.email)

  if (!email) {
    return
  }

  const name = getNameFormFontechEmail(email)

  if (!name) {
    return
  }

  return {
    name,
    email,
    type: 'fontech',
  }
}

export const getFontechEmail = (
  email?: string | null
): string | undefined => {
  if (!email) {
    return
  }

  if (!email.endsWith(FONTECH_EMAIL_TAIL)) {
    return
  }

  return email
}

export const getNameFormFontechEmail = (
  email?: string | null
): string | undefined => {
  if (!email) {
    return
  }

  if (!getFontechEmail(email)) {
    return
  }

  return email.replace(FONTECH_EMAIL_TAIL, '')
}

export const convertBooleanString = (
  bString: BooleanString
): BooleanString => {
  if (bString === 'true') {
    return 'false'
  }

  return 'true'
}
