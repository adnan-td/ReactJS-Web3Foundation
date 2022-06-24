import { Fragment, useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import navlogo from "../../assets/navLogo.png";
import AnimatedNav from "../../components/animations/animateddropdown.component";
import { AnimatePresence } from "framer-motion";

import "./navigation.styles.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenwidth, Setscreenwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      Setscreenwidth(window.innerWidth);
      if (window.innerWidth > 755) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img alt="loading" src={navlogo} />
        </Link>

        {screenwidth > 755 ? (
          <div className="nav-links-container">
            <NavLink className="nav-link nl1" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link nl2" to="/team">
              Team
            </NavLink>
            <NavLink className="nav-link nl3" to="/process">
              Process
            </NavLink>
            <NavLink className="nav-link nav-link-last nl4" to="/accepted-applications">
              Accepted Applications
            </NavLink>
          </div>
        ) : (
          ""
        )}

        <AnimatePresence exitBeforeEnter>{screenwidth < 755 && isOpen ? <Navlinks /> : ""}</AnimatePresence>

        <button
          className="nav-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const Navlinks = () => {
  return (
    <AnimatedNav className="nav-links-container unhider">
      <NavLink className="nav-link nl1" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link nl2" to="/team">
        Team
      </NavLink>
      <NavLink className="nav-link nl3" to="/process">
        Process
      </NavLink>
      <NavLink className="nav-link nav-link-last nl4" to="/accepted-applications">
        Accepted Applications
      </NavLink>
    </AnimatedNav>
  );
};
