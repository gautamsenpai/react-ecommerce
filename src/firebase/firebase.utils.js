import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDac_cv7V9GlhVrt1cvf4ZlOSm2bAtcti8",
    authDomain: "react-ecom-694ee.firebaseapp.com",
    databaseURL: "https://react-ecom-694ee.firebaseio.com",
    projectId: "react-ecom-694ee",
    storageBucket: "",
    messagingSenderId: "261550228734",
    appId: "1:261550228734:web:101262dd1a54b43c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;