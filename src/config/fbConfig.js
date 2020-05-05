import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1DtQW9loogOBfD6ZPaC-b09P34ZzCQxc",
  authDomain: "product-list-54542.firebaseapp.com",
  databaseURL: "https://product-list-54542.firebaseio.com",
  projectId: "product-list-54542",
  storageBucket: "product-list-54542.appspot.com",
  messagingSenderId: "692311010617",
  appId: "1:692311010617:web:2cbe331b5ab247a552cce8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();

export { storage, firebase as default };
