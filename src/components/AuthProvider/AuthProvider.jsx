import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const auth = getAuth(app);

    const googleLogin = new GoogleAuthProvider();
    const gitLogin = new GithubAuthProvider();

    const google = () => {
        setLoad(true)
        return signInWithPopup(auth, googleLogin)
    }
    const git = () => {
        setLoad(true)
        return signInWithPopup(auth, gitLogin)
    }
    const login = (email, pass) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const signup = (email, pass) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const updt = (u, n, img) => {
        setLoad(true)
        return updateProfile(u, {
            displayName: n, photoURL: img
        })
    }
    const out = () => {
        setLoad(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoad(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const info = {
        user,
        google,
        git,
        login,
        signup,
        updt,
        out,
        load
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;