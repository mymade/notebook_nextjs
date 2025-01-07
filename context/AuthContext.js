"use client";
// context/AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true); // 로그인 상태로 변경
  };

  const logout = () => {
    const confirmLogout = window.confirm("로그아웃하시겠습니까?");
  if (confirmLogout) {
    setIsLoggedIn(false); // 로그아웃 상태로 변경
    alert("로그아웃되었습니다.");
  }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
