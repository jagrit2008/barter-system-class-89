  
import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsxck7-EOJm0aGzNBIlfwziZdZGakHwN8",
    authDomain: "projects-39240.firebaseapp.com",
    databaseURL: "https://projects-39240.firebaseio.com",
    projectId: "projects-39240",
    storageBucket: "projects-39240.appspot.com",
    messagingSenderId: "736850757409",
    appId: "1:736850757409:web:7e1e25893d8d68de0b6060"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase.firestore();