import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDwcJQnYqmZZHKroR1U9ysFRWivM9MbmUM",
  authDomain: "project71-5139c.firebaseapp.com",
  projectId: "project71-5139c",
  storageBucket: "project71-5139c.appspot.com",
  messagingSenderId: "30627937070",
  appId: "1:30627937070:web:7203500902dc37c09798bf",
  measurementId: "G-NK14ST0CYT"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
