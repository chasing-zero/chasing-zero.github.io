import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBvZUjejhKnHQQaaAVKASIoD-eMCzWBLBM",
    authDomain: "chasing-zero.firebaseapp.com",
    databaseURL: "https://chasing-zero.firebaseio.com",
    projectId: "chasing-zero",
    storageBucket: "chasing-zero.appspot.com",
    messagingSenderId: "124742710058"
  };
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
