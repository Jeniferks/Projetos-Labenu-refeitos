
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDs2DWiB2mQhSPMEsnnR9J7sqd07cAU-Og",
    authDomain: "whatslab-687f7.firebaseapp.com",
    projectId: "whatslab-687f7",
    storageBucket: "whatslab-687f7.appspot.com",
    messagingSenderId: "1044772836748",
    appId: "1:1044772836748:web:4b9c62955aa999813ab2a9"
    };


const firebaseApp = firebase.initializeApp
    (firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;