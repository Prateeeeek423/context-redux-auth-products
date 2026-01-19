import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState(null);

  const login = (name, userRole) => {
    setIsLoggedIn(true);
    setUserName(name);
    setRole(userRole);
    setToken("dummy-jwt-token");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setRole("");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userName, role, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
