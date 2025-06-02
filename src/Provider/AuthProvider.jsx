import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth), toast.success("log out success");
  };
  const passwordRest = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const handelLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const res = result.user;
        console.log(res);

        setUser(res);

        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        toast.error("Login failed. Try again.");
      });
  };

  const authInfo = {
    createNewUser,
    user,
    setUser,
    loginUser,
    logOut,
    updateUserProfile,
    passwordRest,
    loading,

    handelLoginWithGoogle,
  };
  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return onAuth;
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
