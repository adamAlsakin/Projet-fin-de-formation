import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./css/Navbar.css";

import UserContext from "../contexts/UserContext";
import { Protected } from ".";

import { IconContext } from "react-icons";
import { Button } from "./Button";

function Navbar() {
  const context = useContext(UserContext);

  const logout = () => {
    const { setUser } = context;
    setUser(null);
  };

  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closMobileMenu = () => setClick(false);
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  //window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar fixed-top">
        <div className="sidebarContener">
          <IconContext.Provider value={{ color: "gray" }}>
            <div>
              <Link to="#" className="menu-bars">
                {/* <FaIcons.FaBars onClick={showSidebar} /> */}
              </Link>
            </div>
          </IconContext.Provider>
        </div>

        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closMobileMenu}>
            EASL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/cotisation"
                className="nav-links"
                onClick={closMobileMenu}
              >
                cotisation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactUs"
                className="nav-links"
                onClick={closMobileMenu}
              >
                Nous Contacter
              </Link>
            </li>

            <Protected noauth={true}>
              <li className="nav-item">
                <Link
                  to="/quiSommesNous"
                  className="nav-links"
                  onClick={closMobileMenu}
                >
                  Qui Sommes Nous
                </Link>
              </li>
            </Protected>

            <Protected>
              <li className="nav-item">
                <Link to="/chat" className="nav-links" onClick={closMobileMenu}>
                  Chat
                </Link>
              </li>
            </Protected>
          </ul>
          <Protected noauth={true}>
            <Button
              className="btns"
              className="br"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              AUTENTIFICATION
            </Button>
          </Protected>

          <Protected>
            <button onClick={logout}>Logout</button>
          </Protected>

          {/* <Link to="/connexion">
            {button && <Button buttonStyle="btn-outline">Connexion</Button>}
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
