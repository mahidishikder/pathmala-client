import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()


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

  const loginGoogle = () => {
    setloading(true)
    return signInWithPopup(auth,googleProvider)
    
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
    loginGoogle,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
