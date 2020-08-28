import firebase from "./firebase.utils";
import { auth } from "./firebase.utils";

var provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  display: "popup",
});

export const signInWithFacebook = () => auth.signInWithPopup(provider);
