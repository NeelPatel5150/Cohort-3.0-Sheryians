import React,{ createContext, useContext } from "react";

export const AuthContextData = createContext();

const useAuth = ({children}) => {
    return (
      <AuthContextDataProvider value={{}}>
        {children}
      </AuthContextDataProvider>
  );
};

export default AuthContextData;

