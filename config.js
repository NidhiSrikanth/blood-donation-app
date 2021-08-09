import firebase from "firebase";
require ("@firebase/firestore");

 var firebaseConfig = {
    apiKey: "AIzaSyAV2cMJ_9W_-jw7mDvH-au-CS2xQ71OPzI",
    authDomain: "blood-donation-1c8f4.firebaseapp.com",
    databaseURL: 'https://blood-donation-1c8f4.firebaseio.com',
    projectId: "blood-donation-1c8f4",
    storageBucket: "blood-donation-1c8f4.appspot.com",
    messagingSenderId: "750970485856",
    appId: "1:750970485856:web:34d508a3d47b9cc9685705"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();