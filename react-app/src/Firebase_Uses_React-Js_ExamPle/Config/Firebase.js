import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAtIL3JZt_lD_Ndst6WoSCpdiuTIyTTqYA",
    authDomain: "sign-up-an-login-form-react-js.firebaseapp.com",
    projectId: "sign-up-an-login-form-react-js",
    storageBucket: "sign-up-an-login-form-react-js.appspot.com",
    messagingSenderId: "461907186659",
    appId: "1:461907186659:web:41e06ba28c21880b6946d6",
    measurementId: "G-0QTMMBDYFQ"
  };
  // Initialize Firebase

export default firebase.initializeApp(firebaseConfig);