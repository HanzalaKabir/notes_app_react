import "./loginModal.css";
import React from "react";

export const LoginModal = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="login">Login</div>
        <div className="form-container">
          <form>
            <div className="username">
              <label className="label">Username*</label>
              <input className="login-input" type="text" required="true" />
            </div>
            <div className="password">
              <label className="label">Password*</label>
              <input className="login-input" type="text" required="true" />
            </div>
            <div>
              <button className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
