import React, { useState, createContext } from "react";
import API from "../utils/API";

export const LoginStatusContext = createContext();

export const LoginStatusProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(true)

    function authenticateLogin (id, input) {
        API.authLogin(id, input)
        .then(res => {
            //retruns true or false
            if (res.data) {setLoginState(true)}
        })
    }

    function logout () {
        setLoginState(false)
    }

    return (
        <LoginStatusContext.Provider value={{loginState, authenticateLogin, logout}}>
            {children}
        </LoginStatusContext.Provider>
    );
};
