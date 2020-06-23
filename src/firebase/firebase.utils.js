import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // apiKey: "AIzaSyBBDBWfT8eaTlzzihrOTdE8DOp19wslBGg",
  // authDomain: "clothing-app-arg.firebaseapp.com",
  // databaseURL: "https://clothing-app-arg.firebaseio.com",
  // projectId: "clothing-app-arg",
  // storageBucket: "clothing-app-arg.appspot.com",
  // messagingSenderId: "533095756379",
  // appId: "1:533095756379:web:2f4f9479334f4b5fbc857e",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID//"G-VGQL9TS1BD"
};
console.log(process.env);
console.log(config);

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;