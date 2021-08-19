import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export default css`
  /* border: solid 1px black; */
  grid-column: 1 / -1;
  grid-row: 2;

  @media (min-width: 900px) {
    grid-column: 2 / -2;
  }
`;
