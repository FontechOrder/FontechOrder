import {
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { firebaseAuth } from '@firebase-folder/configure'

import type { StringKeyObject } from '@other-support/Types'

const logInWithGoogleThenGetUserPromise =
  async (): Promise<StringKeyObject> => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })

    const userCredential = await signInWithPopup(
      firebaseAuth,
      provider
    )

    const user = userCredential.user

    return user
  }

export default logInWithGoogleThenGetUserPromise
