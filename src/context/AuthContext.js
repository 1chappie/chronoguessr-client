import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);
    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     if (user) {
    //         setUser(user);
    //     }
    // }, []);
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

