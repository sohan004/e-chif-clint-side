import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, load } = useContext(AuthContex)
    const loc = useLocation()
    if (load) {
        return
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/log_in" state={loc.pathname}></Navigate>
    }
};

export default PrivateRoute;