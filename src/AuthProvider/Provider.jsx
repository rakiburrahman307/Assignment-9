import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../Firebase/firebase';
import TostMassage from '../Pages/TostMassage';



export const AuthContext = createContext();

const auth = getAuth(app)
const Provider = ({ children }) => {
const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setLoading(true);
                window.location.reload()    
                
            })
            .catch(() => TostMassage("Sign out Unsuccessful"))
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
 const signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider);
    
 }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                return () => {
                    unSubscribe();
                }
            }

        });
    }, []);

    const authInfo = {
        createUser,
        loading,
        user,
        logOut,
        signIn,
        signInWithGoogle,



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};

export default Provider;