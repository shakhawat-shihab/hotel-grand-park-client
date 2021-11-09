import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = (props) => {
    const { admin, isLoadingAdmin } = useAuth();
    const { children, ...rest } = props;
    // console.log(isLoadingAdmin, admin);
    if (isLoadingAdmin === true) {
        return (
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
        );
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    (admin) ?
                        children :
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location }
                            }}
                        > </Redirect>
                }>
            </Route>
        </div>
    );
};

export default AdminRoute;