import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setloading] = useState(true)


  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logininWithEmeilPasseord = (email,password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateProfileUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  const singOutUser = () => {
    setloading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    setloading(false)

    });

    return () => {
      unsubscribe(); 
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singOutUser,
    logininWithEmeilPasseord,
    updateProfileUser,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
