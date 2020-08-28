import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvhwQ-hhKSjzis7ZVY-BTZENxXO4IcN-0",
  authDomain: "alistyleecommerce.firebaseapp.com",
  databaseURL: "https://alistyleecommerce.firebaseio.com",
  projectId: "alistyleecommerce",
  storageBucket: "alistyleecommerce.appspot.com",
  messagingSenderId: "668711728672",
  appId: "1:668711728672:web:2f2863eacf5d8db738ee45",
  measurementId: "G-2NM79FREMW",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
