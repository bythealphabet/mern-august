import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import {
  nav,
  pageUnderscore,
  currentPageUnderscore,
  homeLinksTop,
  linksColor,
} from "./NavBarStyles";
import { Link, useLocation } from "react-router-dom";
import useScrollPositionY from "../../../../hooks/useScrollPositionY";
import useWindowSize from "../../../../hooks/useWindowSize";

const NavBar = ({ navList = [] }) => {
  const [_, top] = useScrollPositionY();
  const { pathname } = useLocation();
  const windowSize = useWindowSize();

  return (
    <nav css={nav}>
      <ul className="ul-list">
        {navList.map((link, index) => {
          console.log("equal", pathname);
          console.log("link", link.to);

          return (
            <li className="li-item" key={`${link.to}${link.page}`}>
              <Link
                to={link.to}
                css={[
                  pathname === link.to ? currentPageUnderscore : pageUnderscore,
                  pathname === "/" && top && windowSize.width > 900
                    ? homeLinksTop
                    : linksColor,
                ]}
              >
                {link.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
