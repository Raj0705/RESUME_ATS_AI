import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Local storage se values nikal rahe
  var login = localStorage.getItem("isLogin");
  var userInfoData = localStorage.getItem("userInfo");

  // States
  const [isLogin, setLogin] = useState(login?login:false);
  const [userInfo, setUserInfo] = useState(
    userInfoData ? JSON.parse(userInfoData) : null
  );

  return (
    <AuthContext.Provider value={{ isLogin, setLogin, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
