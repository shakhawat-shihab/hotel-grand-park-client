import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '80vh' }}>
            <h2 className='fw-bold'> <span className='fs-1 text-danger' >404</span>  - Page Not Found</h2>
            <h3>Go back to <Link to='/home' className='fw-bold'>  Home Page </Link></h3>
        </div>
    );
};

export default NotFound;