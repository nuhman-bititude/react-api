import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  const checkAdmin = () => {
    const userType = localStorage.getItem("userType");
    if (userType === "admin") {
      return true;
    } else {
      return false;
    }
  };
  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn, checkAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
