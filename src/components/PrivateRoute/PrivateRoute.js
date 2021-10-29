import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { user, isLoading } = useAuth();
    const { children, ...rest } = props;
    // console.log(isLoading);
    if (isLoading === true) {
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
                    (user.displayName || user.email) ?
                        children :
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        > </Redirect>
                }>
            </Route>
        </div>
    );
};

export default PrivateRoute;