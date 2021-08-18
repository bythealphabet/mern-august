import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { OpeningHours, PhoneNumbers } from "./ContactInfo";

const MobileMenu = ({ active, navList = [] }) => {
  const mobileMenuStyles = css`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1rem;

    grid-column: 1 / -1;
    grid-row: 6 / span 2;

    p {
      font-size: 1.3rem;
      /* color: var(--blue); */
      font-weight: bold;

      span {
        color: #cccc;
      }
    }
  `;

  return (
    <section css={mobileMenuStyles}>
      <p>
        Call Us: <span> +5999</span> 516 8764
      </p>
    </section>
  );
};

export default MobileMenu;
