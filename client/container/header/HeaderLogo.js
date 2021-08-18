import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

const HeaderLogo = ({ position }) => {
  const style = css`
    z-index: 10;
    height: var(--headerHeight);
    display: flex;
    align-items: flex-end;

    grid-column: 2 / span 3;
    img {
      height: 50%;

      @media (min-width: 900px) {
        height: 70%;
      }
    }
  `;
  return (
    <Link to="/" css={[style, position]}>
      <img src={logo} alt="solargard logo" />
    </Link>
  );
};

export default HeaderLogo;
