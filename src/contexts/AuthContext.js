import { render } from '@testing-library/react';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIin] = useState(false);

    const changeAuthStatus = () => {
        setIsLoggedIin(!isLoggedIn);
    }




    return (
        <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus: changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )
}




export default AuthContextProvider;