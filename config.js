import * as firebase from 'firebase'
require ("@firebase/firestore")
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCPZJqlCDWAmGK83Gmp9L_6vvn1xXkp15g",
    authDomain: "library-e1479.firebaseapp.com",
    projectId: "library-e1479",
    storageBucket: "library-e1479.appspot.com",
    messagingSenderId: "540560235717",
    appId: "1:540560235717:web:64a78afe8b5068138664ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();