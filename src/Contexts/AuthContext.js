import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"




const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
const [currentUser, setcurrentUser] = useState();
const [loading, setloading] = useState(true);

function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    return auth.signInWithPopup(provider)
}

function logout(){
    return auth.signOut()
}



useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged(user =>{
    setcurrentUser(user)
    setloading(false)
 
})
return unsubscribe
}, []);


const value = {
    currentUser,
    signInWithGoogle,
    logout
}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}


