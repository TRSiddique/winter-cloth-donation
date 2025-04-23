import {createContext} from 'react';
import { useState } from 'react';
import app from '../firebase.init';
import {getAuth} from 'firebase/auth';
import{createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { sendPasswordResetEmail } from "firebase/auth";


export const AuthContext= createContext();
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();





const AuthProvider = ({children}) => {
    
    // const [user,setUser]=useState({
    //         name:'jankar',
    //         email:'mahbeu@gmail.com'
    //     });
    const [user,setUser]=useState(null);
   // console.log(user);
    const [loading, setLoading]=useState(true)


const createNewUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
};
const userLogin=(email,password)=>{
    setLoading(true);
return signInWithEmailAndPassword(auth, email,password)
}


const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}
const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

const updateUserProfile=(updatedData)=>{

return updateProfile(auth.currentUser, updatedData)
}
const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


const authInfo={

     user,
     setUser,
     createNewUser,
     logOut,
     userLogin,
     loading,
     updateUserProfile,
     googleSignIn,
     resetPassword

};
useEffect(()=>{
 const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);

    })
    return ()=>{
        unsubscribe();

    }

},[])


return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;