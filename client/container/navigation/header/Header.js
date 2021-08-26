import React, { useState, useEffect, useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import Hamburger from "./Hamburger";
import HeaderLogo from "./HeaderLogo";
import Menu from "./Menu";

const Header = (props) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const { auth, signOutHandler, setCategoryName } = useContext(AuthContext);

  useEffect(() => {
    setActive(false);
    props.isMenuActive(false);
  }, [location]);

  const hamburgerHandler = () => {
    props.isMenuActive(!active);
    setActive((prev) => !prev);
  };

  const navList = [
    { to: "/projectonan", page: "projectonan" },
    { to: "/ken-mi-ta", page: "ken mi ta" },
    { to: "/tuma-kontakto", page: "kontakto" },
    { to: "/signup", page: "signup", btn: true, show: auth ? false : true },
    { to: "/login", page: "login", show: auth ? false : true },
    { to: "/signout", page: "signout", btn: true, show: auth ? true : false },
  ];

  const header = css`
    z-index: 100;
    position: fixed;
    grid-template-rows: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;

  const logo = css`
    grid-column: 2 / span 2;
    grid-row: 1;
    align-self: center;

    display: flex;
    align-items: center;

    @media (min-width: 900px) {
      grid-column: 2 / span 3;
    }
  `;

  const hamburger = css`
    grid-column: 7 / span 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  `;

  const menu = css`
    grid-column: 6 / -2;
    grid-row: 1;
  `;

  return (
    <header css={header} className="base-grid">
      <HeaderLogo position={logo} />
      <Hamburger
        position={hamburger}
        active={active}
        setActive={hamburgerHandler}
      />
      <Menu position={menu} active={active} navList={navList} />
    </header>
  );
};

export default Header;
