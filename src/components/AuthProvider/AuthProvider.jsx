import React, { createContext } from 'react';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const info = {

    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;