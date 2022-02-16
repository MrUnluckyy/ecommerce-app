import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBLfGRlaNdaWhhH6KRkwoshmtZuHhbF3zc",
  authDomain: "clothing-ecommerce-1d4e8.firebaseapp.com",
  projectId: "clothing-ecommerce-1d4e8",
  storageBucket: "clothing-ecommerce-1d4e8.appspot.com",
  messagingSenderId: "1093763439865",
  appId: "1:1093763439865:web:a3a2f0499092f9a4d15628",
  measurementId: "G-B8QYXCV6K5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
