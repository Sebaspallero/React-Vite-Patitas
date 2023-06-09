import { initializeApp } from 'firebase/app'
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBmXN2o5m9HejZbhdX2GLwbs5sA4KoO2PE',
  authDomain: 'patitas-react-vite.firebaseapp.com',
  projectId: 'patitas-react-vite',
  storageBucket: 'patitas-react-vite.appspot.com',
  messagingSenderId: '461679806708',
  appId: '1:461679806708:web:19dee4b9fddcae8175b6a1',
  measurementId: 'G-1ZKPBLTWHN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
/* const analytics = getAnalytics(app); */

export const db = getFirestore(app)
export const productsCollectRef = query(collection(db, "products"))
export const getProductsFromDb = getDocs(productsCollectRef)
