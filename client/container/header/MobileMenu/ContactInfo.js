import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

const mainStyles = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
`;

const bold = css`
  font-weight: bold;
`;

const top = css`
  font-size: 1.2rem;
  color: var(--yellow);
  ${bold}
`;

export function OpeningHours({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;

  return (
    <section css={section}>
      {/* <p css={bold}>Monday to Friday</p>
      <p>7:30 am to 12:00 pm</p>
      <p>1:30 pm to 5:00 pm</p> */}
    </section>
  );
}

export function PhoneNumbers({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;

  return (
    <section css={section}>
      <p css={title}>Call:</p>
      <p>517 8764</p>
    </section>
  );
}

export function Adress({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;
  return (
    <section css={section}>
      <p css={title}>Address:</p>
      <p> Groot Davelaar kavel 12 B Curaçao, Dutch Caribbean</p>
    </section>
  );
}
