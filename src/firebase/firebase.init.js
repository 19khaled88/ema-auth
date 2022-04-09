// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZJKQblge4KFknRjoLAD6gX3IU81KBmgc',
  authDomain: 'ema-jhom-auth.firebaseapp.com',
  projectId: 'ema-jhom-auth',
  storageBucket: 'ema-jhom-auth.appspot.com',
  messagingSenderId: '348050931824',
  appId: '1:348050931824:web:eb2069b23dffcd80a1b4b5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
