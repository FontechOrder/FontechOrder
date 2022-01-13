import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:
    'AIzaSyCdnAcqwQBVXssUOTPsc5qHBsE28nidNow',
  authDomain: 'fontech-order.firebaseapp.com',
  projectId: 'fontech-order',
  storageBucket: 'fontech-order.appspot.com',
  messagingSenderId: '228673200251',
  appId:
    '1:228673200251:web:d8bb5226459e2ba71f02de',
  measurementId: 'G-Q46CSEZLTR',
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebase)
export const firebaseFirestore =
  getFirestore(firebase)
export const firebaseStorage =
  getStorage(firebase)
