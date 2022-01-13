import { signOut } from 'firebase/auth'

import { firebaseAuth } from '@firebase-folder/configure'

const logOut = async (): Promise<boolean> => {
  try {
    signOut(firebaseAuth)
  } catch (err) {
    return false
  }

  return true
}

export default logOut
