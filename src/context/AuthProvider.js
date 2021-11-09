import React, { createContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';
import { useSpring, animated, config } from 'react-spring';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allData = useFirebase();
    //console.log(allData.isLoading);
    //console.log(allData.user.displayName);
    // if (!allData?.user?.displayName) {
    //     // return (<div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
    //     //     <Spinner animation='grow'></Spinner>
    //     // </div>
    //     // );
    //     function LoopTrue() {
    //         const styles = useSpring({
    //             loop: true,
    //             from: { rotateZ: 0 },
    //             to: { rotateZ: 180 },
    //         })

    //         return (
    //             <animated.div
    //                 style={{
    //                     width: 80,
    //                     height: 80,
    //                     backgroundColor: '#46e891',
    //                     borderRadius: 16,
    //                     margin: 'auto',
    //                     ...styles,
    //                 }}
    //             />
    //         )
    //     }
    //     return (<div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
    //         <LoopTrue></LoopTrue>
    //     </div>);
    // }
    // else {
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
    // }

};

export default AuthProvider;