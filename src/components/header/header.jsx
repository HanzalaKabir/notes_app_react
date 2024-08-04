import "./header.css";
import appLogo from "../../assets/logo.png";
import titleLogo from "../../assets/heading.png";
import { useState } from "react";
import { LoginModal } from "../modal/loginModal";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleProfileClick = () => {
    const val=showModal;
    setShowModal(!val);
  };

  return (
    <>
      <header className="d-flex header">
        <div className="d-flex">
          <div className="headerLogoContainer">
            <img className="headerLogo" src={appLogo} alt="appLogo" />
          </div>
          <div className="titleContainer">
            <img className="titleLogo" src={titleLogo} alt="titleLogo" />
          </div>
        </div>
        <div className="signup-button d-flex align-center justify-center">
          <span
            className="material-icons-outlined"
            onClick={handleProfileClick}
          >
            person
          </span>
        </div>
      </header>
      <hr />
      {showModal && <LoginModal />}
    </>
  );
};
