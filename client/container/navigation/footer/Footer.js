import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Footer() {
  const footerStyles = css`
    border: solid 1px black;
    height: var(--footerHeight);
    grid-column: 1 / -1;
    grid-row: 3;
  `;
  return <footer css={footerStyles}>Footer</footer>;
}
export default Footer;
