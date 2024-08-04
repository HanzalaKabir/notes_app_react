import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const accessTokenContext = createContext();

const AccessTokenProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [username,setUsername]=useState(null);

  return (
    <accessTokenContext.Provider value={{ accessToken, setAccessToken,username,setUsername }}>
      {props.children}
    </accessTokenContext.Provider>
  );
};

const useAccessToken = () => useContext(accessTokenContext);

export { AccessTokenProvider, useAccessToken };
