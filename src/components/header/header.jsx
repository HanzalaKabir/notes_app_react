import "./header.css";
import appLogo from "../../assets/logo.png";
import titleLogo from "../../assets/heading.png";

export const Header = () => {
  return (
    <>
      <header className="d-flex align-center header">
        <div className="headerLogoContainer">
          <img className="headerLogo" src={appLogo} alt="appLogo" />
        </div>
        <div className="titleContainer">
          <img className="titleLogo" src={titleLogo} alt="titleLogo" />
        </div>
      </header>
      <hr />
    </>
  );
};
