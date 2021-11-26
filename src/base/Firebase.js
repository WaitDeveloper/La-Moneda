import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCvagbhNYMk7D2M7cddGCtwjRPGFams_r8",
  authDomain: "la-moneda-d7ca8.firebaseapp.com",
  projectId: "la-moneda-d7ca8",
  storageBucket: "la-moneda-d7ca8.appspot.com",
  messagingSenderId: "734902059732",
  appId: "1:734902059732:web:86722becdf8c319f3a7141"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}

  

