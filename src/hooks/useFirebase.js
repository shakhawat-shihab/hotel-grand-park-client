import InitializeFirebase from "../firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
InitializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    };
    const createUserByEmailPassword = (email, password, displayName) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     const newUser = {
        //         ...result.user,
        //         displayName: displayName
        //     }
        //     setUser(newUser);
        // })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                swal({
                    title: "You are Successfully Logged Out!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .finally(() => {
                setIsLoading(false);
            })

    };
    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        // .then(res => {
        //     // console.log('success');
        //     setUser(res.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }
    const updateProfileName = (displayName) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: displayName,
        }).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return { signInUsingGoogle, user, setUser, error, setError, logOut, isLoading, setIsLoading, createUserByEmailPassword, signInUser, updateProfileName }
}
export default useFirebase;