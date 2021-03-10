import * as firebase from 'firebase';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMQe5EOaRwC6UX36RxrhjSJcNPjr651rI",
    authDomain: "graphql-auth-7905f.firebaseapp.com",
    projectId: "graphql-auth-7905f",
    storageBucket: "graphql-auth-7905f.appspot.com",
    // messagingSenderId: "1044993034074",
    appId: "1:1044993034074:web:8e1773354c62ab865e9563",
    measurementId: "G-9RDSCE2R7R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()