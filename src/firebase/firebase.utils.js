import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyA14aZcNGLHqtGAvQBDM6HdD2E6CLUuIoQ",
  authDomain: "clothing-store-db-55d60.firebaseapp.com",
  databaseURL: "https://clothing-store-db-55d60.firebaseio.com",
  projectId: "clothing-store-db-55d60",
  storageBucket: "clothing-store-db-55d60.appspot.com",
  messagingSenderId: "624319605562",
  appId: "1:624319605562:web:f60cb1d2163b432015be03",
  measurementId: "G-JSN9B0BRE5"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
