import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARlHULbHB9GgGiJ_-DzZwDDGtEEOdRehM",
  authDomain: "clone-6213a.firebaseapp.com",
  projectId: "clone-6213a",
  storageBucket: "clone-6213a.appspot.com",
  messagingSenderId: "1042154016100",
  appId: "1:1042154016100:web:4baaa63643e7451affbe71",
  measurementId: "G-PTEV1ZS1LY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };