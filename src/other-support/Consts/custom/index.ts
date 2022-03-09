import setFireStoreDocPromise from '@firebase-folder/functions/setFireStoreDocPromise'

import type { BooleanString } from '@other-support/Types'

export const initStringArray = Array<string>()

const FONTECH_EMAIL_TAIL = '@fontech.com.tw'

export const getFontechEmail = (
  email?: string | null
): string | undefined => {
  if (!email) {
    return undefined
  }

  if (!email.endsWith(FONTECH_EMAIL_TAIL)) {
    return undefined
  }

  return email
}

export const getNameFormFontechEmail = (
  email?: string | null
): string | undefined => {
  if (!email) {
    return undefined
  }

  if (!getFontechEmail(email)) {
    return undefined
  }

  return email.replace(FONTECH_EMAIL_TAIL, '')
}

export const setUserFireStore = async (
  getEmail?: string | null
): Promise<boolean> => {
  const name = getNameFormFontechEmail(getEmail)

  if (!name) {
    return false
  }

  const email = name + FONTECH_EMAIL_TAIL

  try {
    await setFireStoreDocPromise({
      path: 'users/' + email,
      data: {
        name,
        email,
        type: 'fontech',
      },
    })
  } catch {
    return false
  }

  return true
}

export const convertBooleanString = (
  bString: BooleanString
): BooleanString => {
  if (bString === 'true') {
    return 'false'
  }

  return 'true'
}
