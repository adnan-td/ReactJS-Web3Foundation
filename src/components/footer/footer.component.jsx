/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./footer.component.scss";
import logo2 from "../../assets/footlogo.png";

const Footer = () => {
  return (
    <div className="Footer" data-aos="fade-up" data-aos-offset="200">
      <div className="f-top">
        <div className="logo-container">
          <img alt="loading" src={logo2} />
        </div>
        <div className="fl-container">
          <p>
            <Link className="fl" to={"/"}>
              Home
            </Link>{" "}
            |{" "}
            <Link className="fl" to={"/team"}>
              Team
            </Link>{" "}
            |{" "}
            <Link className="fl" to={"/process"}>
              Process
            </Link>{" "}
            |{" "}
            <Link className="fl" to={"#"}>
              Help
            </Link>
          </p>
        </div>
        <div className="icon-container">
          <p>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="f-bottom">
        <p>Apache License 2.0</p>
        <p>All Rights Reserved</p>
        <p>&copy; 2022 Web3 Foundation</p>
        <p>Privacy and Cookies</p>
      </div>
    </div>
  );
};

export default Footer;
