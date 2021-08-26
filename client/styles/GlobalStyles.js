import React from "react";
import { jsx, css, Global } from "@emotion/react"; /** @jsx jsx */

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@300;400;700&display=swap");

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --heroHeight: 800px;
          --headerHeight: 100px;
          --footerHeight: 300px;
          --white: #ffff;
          --black: #404040;
          --blue: #1e628a;
        }

        body,
        html {
          font-family: "Hind Vadodara", sans-serif;
          font-size: 1rem;
          color: var(--black);
          line-height: 1.6;
          background-color: var(--white);
          height: 100%;
        }

        #root {
          @media (max-width: 900px) {
            overflow-x: hidden;
            position: relative;
            height: 100%;
          }
        }

        img {
          object-fit: cover;
          max-height: 100%;
          display: block;
        }

        a {
          text-decoration: none;
          color: var(--black);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 300;
        }

        /* TYPOGRAPY */
        h1 {
          font-size: 1.5em;
        }

        /*BUTTONS ------------*/

        .btn {
          display: inline-block;
          padding: 0.5em 1.8em;
          font-weight: bold;
          text-align: center;
          border: solid 0.5px #404040;
          cursor: pointer;
        }

        .btn:hover {
          background: #404040;
          color: #fb8c08;
        }

        /* END BUTTONS */

        .base-grid {
          display: grid;
          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);

          @media (min-width: 900px) {
            grid-template-columns:
              minmax(5em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(5em, 1fr);
          }
        }

        .main-router-rows {
        }
      `}
    />
  );
}
export default GlobalStyles;
