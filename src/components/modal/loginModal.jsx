import "./loginModal.css";
import React from "react";
import { useState } from "react";
import { useAccessToken } from "../../Context/";
import { jwtDecode } from "jwt-decode";

export const LoginModal = () => {
  const [loginActive, setLoginActive] = useState(true);
  const [signupActive, setsignupActive] = useState(false);

  const [signupResponse, setSignupResponse] = useState("");
  const [loginResponse, setLoginResponse] = useState("");

  const { accessToken, setAccessToken, username, setUsername } =
    useAccessToken();

  const [signupData, setSignupData] = useState({
    username: null,
    email: null,
    number: null,
    password: null,
  });

  const [loginData, setLoginData] = useState({
    username: null,
    password: null,
  });

  const handleLoginClick = () => {
    setLoginActive(true);
    setsignupActive(false);
  };

  const handleSignUpClick = () => {
    setLoginActive(false);
    setsignupActive(true);
  };

  const handleSignUpChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignUpSubmitClick = async () => {
    const response = await fetch(
      "https://notes-app-backend-c0mr.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }
    );
    const data = await response.json();
    const responseMessage = data.msg;
    setSignupResponse(responseMessage);
    console.log(data);
    handleSignUpClick();
  };

  const handleLoginChange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmitClick = async () => {
    const response = await fetch(
      "https://notes-app-backend-c0mr.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    //console.log(data);
    if (data.msg === "Authentication Successful") {
      //console.log(data.token);
      const token = data.token;
      setAccessToken(token);
      const decodedToken = jwtDecode(token);
      //console.log(decodedToken);
      const name = decodedToken.username;
      setUsername(name);
      //console.log(name);
      console.log("Login successful");
      var toStore = {
        username: name,
        token: token,
      };
      localStorage.setItem("Data", toStore);
    } else {
      console.log("Login failed");
      console.log(data.msg);
    }
    const responseMessage = data.msg;

    setLoginResponse(responseMessage);
    handleLoginClick();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        {!accessToken ? (
          <div className="login-signup-selector">
            <span
              className={`selector ${loginActive ? "login-btn-active" : ""}`}
              onClick={handleLoginClick}
            >
              Login
            </span>
            <span
              className={`selector ${signupActive ? "login-btn-active" : ""}`}
              onClick={handleSignUpClick}
            >
              Signup
            </span>
          </div>
        ) : accessToken ? (
          <div className="login-signup-selector">
            <span className="selector login-btn-active">Profile</span>
          </div>
        ) : null}

        {loginActive && !accessToken ? (
          <div className="form-container">
            <div className="username">
              <label className="label">Username*</label>
              <input
                className="login-input"
                type="text"
                name="username"
                required
                onChange={handleLoginChange}
              />
            </div>
            <div className="password">
              <label className="label">Password*</label>
              <input
                className="login-input"
                type="text"
                name="password"
                required
                onChange={handleLoginChange}
              />
            </div>
            <div className="login-message">{loginResponse}</div>
            <div className="btn-submit-container">
              <button className="btn-submit" onClick={handleLoginSubmitClick}>
                Submit
              </button>
            </div>
          </div>
        ) : loginActive && accessToken ? (
          <div className="user-profile">
            <div className="user-profile-name">Username: {username}</div>
            <div className="user-profile-logout">
              <span className="material-icons-outlined">logout</span>
            </div>
          </div>
        ) : null}
        {signupActive ? (
          <div className="form-container">
            <div className="username">
              <label className="label">Username*</label>
              <input
                className="login-input"
                name="username"
                type="text"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="email">
              <label className="label">Email*</label>
              <input
                className="login-input"
                name="email"
                type="email"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="number">
              <label className="label">Number*</label>
              <input
                className="login-input"
                name="number"
                type="number"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="password">
              <label className="label">Password*</label>
              <input
                className="login-input"
                name="password"
                type="text"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="signup-message">{signupResponse}</div>
            <div className="btn-submit-container">
              <button className="btn-submit" onClick={handleSignUpSubmitClick}>
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
