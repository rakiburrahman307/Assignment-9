import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import { app } from '../Firebase/firebase';


export const AuthContext = createContext();
const auth =getAuth(app)
const Provider = ({children}) => {

 const [user, setUser] = useState(null);
 const [loading,setLoading] = useState(true);

 const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
 }


 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        if (currentUser) {
            setUser(currentUser);
            setLoading(false);
          } else {
            console.log('log out User')
            return () => {
                unSubscribe();
            }
          }
         
    });
 },[]);

   const authInfo ={
    createUser,
    loading,
    user,



}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children:PropTypes.node
};

export default Provider;