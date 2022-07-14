import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [log, setLog] = useState();
  const login = (user) => {
    setLog(true);
    setUser(user);
  };
  const logout = () => {
    setLog(false);
    setUser(null);
  };

  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      setLog(true);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout, log }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
