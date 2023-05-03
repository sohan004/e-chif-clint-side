import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, load } = useContext(AuthContex)
    const loc = useLocation()
    if (load) {
        return <div className='text-center'>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/log_in" state={loc.pathname} replace></Navigate>
    }
};

export default PrivateRoute;