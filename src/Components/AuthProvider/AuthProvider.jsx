import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);
  const [AS, setAS] = useState(true);

  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (cUser) => {
      setLoad(false);
      setUser(cUser);
      console.log(cUser);
    });
    return () => unSub();
  }, [AS, auth]);

  const logOut = () => {
    setLoad(true);
    setUser(null);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoad(true);
    return signInWithPopup(auth, google);
  };

  const githubLogin = () => {
    setLoad(true);
    return signInWithPopup(auth, github);
  };

  const register = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logOut,
        googleLogin,
        githubLogin,
        register,
        logIn,
        load,
        AS,
        setAS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
