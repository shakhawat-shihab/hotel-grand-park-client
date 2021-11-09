import InitializeFirebase from "../firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
InitializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingAdmin, setIsLoadingAdmin] = useState(true);
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
                setUser(user);
                fetch(`http://localhost:5000/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log('email  address: ', user.email, ' isAdmin: ', data.admin)
                        setAdmin(data.admin);
                        setIsLoadingAdmin(false);
                    })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    //useEffect te  user.email asar agei ekbar run hy a jasse, jar fole  
    // http://localhost:5000/users/undefined ei link fetch korte partase na.
    // tai user load howar por e amdr admin kina check korte hbe
    /*useEffect(() => {
        setIsLoadingAdmin(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(user.email, data.admin)
                setAdmin(data.admin);
                setIsLoadingAdmin(false);
            })
    }, [user.email])*/

    function saveUser(email, displayName, method) {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return { signInUsingGoogle, user, setUser, error, setError, logOut, isLoading, setIsLoading, createUserByEmailPassword, signInUser, updateProfileName, saveUser, admin, isLoadingAdmin }
}
export default useFirebase;