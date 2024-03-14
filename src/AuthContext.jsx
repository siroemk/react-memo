import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  
  function login() {
    setIsLogin(true);
  }

  function logout() {
    setIsLogin(false);
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useLogin() {
  return useContext(AuthContext);
}
