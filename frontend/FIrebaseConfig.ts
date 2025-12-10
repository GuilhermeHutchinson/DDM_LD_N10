// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZyf3ntne-G8ImTIAbo9OTby7DGMbGzOs",
  authDomain: "ld-n10.firebaseapp.com",
  projectId: "ld-n10",
  storageBucket: "ld-n10.firebasestorage.app",
  messagingSenderId: "493888303322",
  appId: "1:493888303322:web:9c284fbdbbc1cab19875e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)

});
export const db = getFirestore(app);