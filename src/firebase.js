// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnSfsl4bYepwg1LdJQxreumOJ_FJ_mwXA",
    authDomain: "netflix-clone-df2da.firebaseapp.com",
    projectId: "netflix-clone-df2da",
    storageBucket: "netflix-clone-df2da.appspot.com",
    messagingSenderId: "715289276470",
    appId: "1:715289276470:web:aa5944afc49e22e033a897"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export { auth };
  export default db;