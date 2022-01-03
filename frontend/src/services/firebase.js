import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0GCQxth5eioJ3VapKhE11wMzBGcowsRk",
    authDomain: "consultorio-react-spring.firebaseapp.com",
    projectId: "consultorio-react-spring",
    storageBucket: "consultorio-react-spring.appspot.com",
    messagingSenderId: "379361449999",
    appId: "1:379361449999:web:d109bea4d215be73fe6b7a"
};

const app = initializeApp(firebaseConfig);
const googleAuth = new GoogleAuthProvider();
const db = getFirestore(app)

export {app, googleAuth,db}