// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8JCuTa_eoHr_ab8resdGL7MR49Sc_bgg",
  authDomain: "fir-authentication-171de.firebaseapp.com",
  projectId: "fir-authentication-171de",
  storageBucket: "fir-authentication-171de.appspot.com",
  messagingSenderId: "272102848865",
  appId: "1:272102848865:web:be69631dd0e2f698b4ed20",
  measurementId: "G-1XE8CWRD5K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
