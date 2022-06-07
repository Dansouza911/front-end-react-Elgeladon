import "./style.css";
import logoIcon from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>El Geladon 2022 ®</p>
      <img alt="Logo El Geladon" src={logoIcon} />
    </div>
  );
};

export default Footer;
