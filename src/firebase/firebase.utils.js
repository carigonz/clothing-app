import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBDBWfT8eaTlzzihrOTdE8DOp19wslBGg",
  authDomain: "clothing-app-arg.firebaseapp.com",
  databaseURL: "https://clothing-app-arg.firebaseio.com",
  projectId: "clothing-app-arg",
  storageBucket: "clothing-app-arg.appspot.com",
  messagingSenderId: "533095756379",
  appId: "1:533095756379:web:2f4f9479334f4b5fbc857e",
  measurementId: "G-VGQL9TS1BD"
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;