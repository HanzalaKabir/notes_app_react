import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const accessTokenContext = createContext();

const AccessTokenProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [username,setUsername]=useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <accessTokenContext.Provider value={{ accessToken, setAccessToken,username,setUsername,showModal, setShowModal }}>
      {props.children}
    </accessTokenContext.Provider>
  );
};

const useAccessToken = () => useContext(accessTokenContext);

export { AccessTokenProvider, useAccessToken };
