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
        {navList.map(({ to, page, show = true }, index) => {
          if (show) {
            return (
              <li className="li-item" key={`${to}${page}`}>
                <Link
                  to={to}
                  css={[
                    pathname === to ? currentPageUnderscore : pageUnderscore,
                    pathname === "/" && top && windowSize.width > 900
                      ? homeLinksTop
                      : linksColor,
                  ]}
                >
                  {page}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
