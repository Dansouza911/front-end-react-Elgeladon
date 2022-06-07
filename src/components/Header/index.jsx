import "./style.css";
import logo from "../../assets/icons/logo.svg";
import buyIcon from "../../assets/icons/sacola.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img alt="El Geladon Logo" src={logo} />
        <h2>El Geladon</h2>
      </div>
      <img alt="Sacola de Compras" src={buyIcon} />
    </div>
  );
};

export default Header;
