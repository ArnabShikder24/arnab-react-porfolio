import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCQJhnMWXXcljaqH0XlFecoE_NoDOfoP4g",
  authDomain: "arnab-react-portfolio.firebaseapp.com",
  projectId: "arnab-react-portfolio",
  storageBucket: "arnab-react-portfolio.appspot.com",
  messagingSenderId: "347891070167",
  appId: "1:347891070167:web:7e47e07b7b15552c8fec92"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);