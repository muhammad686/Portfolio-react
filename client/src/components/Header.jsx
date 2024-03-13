import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../assets/styles/style.css";

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="logo-container">
        <img src={logo} alt="MT" className="logo" />
      </div>
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
