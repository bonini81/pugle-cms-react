import { signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";

import { auth } from "../firebase";
import { UserLogin } from "../interfaces/backend/user";

const signIn = async (data: UserLogin) => {
  const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
  const token = await userCredential.user.getIdToken();
  const displayName = userCredential.user.displayName ?? userCredential.user.email ?? "";
  return {
    token,
    displayName,
  };
};

const signOut = async () => {
  await firebaseSignOut(auth);
};

export default {
  signIn,
  signOut,
};
