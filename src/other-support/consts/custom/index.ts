import type { User } from '@supabase/supabase-js'
import type {
  NoIdDatabaseUserType,
  MenuItemOptionInterface,
  MenuItemWithItemOptionInterface,
} from '@supabase-folder/types'

import type { BooleanString } from '@other-support/types'

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

export const testImage = (
  url: string,
  timeout?: number
) =>
  new Promise(resolve => {
    timeout = timeout || 5000
    let timedOut = false
    let timer: NodeJS.Timeout | null = null
    const img = new Image()

    img.onerror = img.onabort = function () {
      if (!timedOut) {
        timer && clearTimeout(timer)
        resolve('error')
      }
    }

    img.onload = function () {
      if (!timedOut) {
        timer && clearTimeout(timer)
        resolve('success')
      }
    }

    img.src = url

    timer = setTimeout(function () {
      timedOut = true
      // reset .src to invalid URL so it stops previous
      // loading, but doesn't trigger new load
      img.src = '//!!!!/test.jpg'
      resolve('timeout')
    }, timeout)
  })

export const menuItemOptionListGroupBy = (
  menuItemOptionList: Array<MenuItemOptionInterface>
): Array<MenuItemWithItemOptionInterface> => {
  return menuItemOptionList.reduce(
    (result, current) => {
      const index = result.findIndex(
        menuItem =>
          menuItem.id === current.menu_item.id
      )
      if (index > -1) {
        const findMenuItem = result[index]

        findMenuItem.itemOptions.push(current)

        result[index] = findMenuItem

        return result
      }

      return [
        ...result,
        {
          ...current.menu_item,
          itemOptions: [current],
        },
      ].sort((a, b) => a.id - b.id)
    },
    Array<MenuItemWithItemOptionInterface>()
  )
}
