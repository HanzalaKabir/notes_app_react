import "./footer.css";
import githubLogo from "../../assets/githubLogo.png";
import LinkedInLogo from "../../assets/linkedInLogo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="watermark">Made by Hanzala</p>
      <div className="logoContainer">
        <a
          href="https://github.com/HanzalaKabir"
          target="_blank"
          rel="noreferrer"
          className="footerLogo"
        >
          <img className="footerIcon" src={githubLogo} alt="githubLogo" />
        </a>

        <a
          href="https://www.linkedin.com/in/hanzala-kabir/"
          target="_blank"
          rel="noreferrer"
          className="footerLogo"
        >
          <img className="footerIcon" src={LinkedInLogo} alt="LinkedInLogo" />
        </a>
      </div>

      {/* <HomeTwoToneIcon style={{color:"red", fontSize:50}}/> */}
    </div>
  );
};
