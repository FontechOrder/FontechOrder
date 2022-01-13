import { signInWithEmailAndPassword } from 'firebase/auth'

import { firebaseAuth } from '@firebase-folder/configure'

import type { StringKeyObject } from '@other-support/Types'

const logInThenGetUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<StringKeyObject> => {
  const userCredential =
    await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

  const user = userCredential.user

  return user
}

export default logInThenGetUser
