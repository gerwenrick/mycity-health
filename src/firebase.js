import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtl1IAONoRVsD9onSxgwjoKTiR5J_T06s",
  authDomain: "smartcity-healthcare.firebaseapp.com",
  databaseURL: "https://smartcity-healthcare.firebaseio.com",
  projectId: "smartcity-healthcare",
  storageBucket: "smartcity-healthcare.appspot.com",
  messagingSenderId: "63745437735",
  appId: "1:63745437735:web:866f4a295f4c7b5db7de02",
  measurementId: "G-7J27JEY13F"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const ziekenhuisCollection = db.collection("ziekenhuizen");
const meldingenCollection = db.collection("meldingen");
// const commentsCollection = db.collection('comments');
// const likesCollection = db.collection('likes');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  ziekenhuisCollection,
  meldingenCollection
  // commentsCollection,
  // likesCollection,
};
