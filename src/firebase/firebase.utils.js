import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBgZI4csqDogAt65g059B15IcIqF_s-pbc",
  authDomain: "ideasmeetup-db.firebaseapp.com",
  databaseURL: "https://ideasmeetup-db.firebaseio.com",
  projectId: "ideasmeetup-db",
  storageBucket: "ideasmeetup-db.appspot.com",
  messagingSenderId: "505931538961",
  appId: "1:505931538961:web:fac0f8fdd20a6e3f7387b0"
};

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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  
  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
