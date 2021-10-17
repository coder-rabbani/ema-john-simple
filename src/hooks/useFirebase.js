import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthencation from "../Firebase/firebase.init";

initializeAuthencation();

const useFirebase = () =>{

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Sign in using Google
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
        })
    }

    // signOut Google
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    // Observe whether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
        })
    }, [])

    return {user, signInUsingGoogle, logOut }
}

export default useFirebase;