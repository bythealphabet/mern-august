import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const nav = css`
  z-index: 11;
  font-size: 1.5rem;
  letter-spacing: 2px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: 1 / span 4;

  background: var(--blue);

  @media (min-width: 900px) {
    background: transparent;

    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    grid-column: 5 / -1;
    grid-row: 1;
  }

  @media (min-width: 1110px) {
    font-size: 1.2rem;
  }

  .ul-list {
    margin-right: 1em;
    list-style: none;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    @media (min-width: 900px) {
      width: 100%;
      max-width: 900px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    }

    .li-item {
      text-align: right;

      @media (min-width: 900px) {
        padding: 0.8em;

        border: none;
        text-align: center;
        text-transform: lowercase;

        :hover {
          background: transparent;
        }

        :last-child {
          padding-right: 0;
        }
      }
    }
  }
`;

export const linksColor = css`
  text-transform: capitalize;
  color: var(--white);

  @media (min-width: 900px) {
    color: var(--black);
  }
`;

export const pageUnderscore = css`
  @media (min-width: 900px) {
    :after {
      display: block;
      content: " ";
      width: 100%;
      border-bottom: 0.5px solid;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    :hover::after {
      transform: scaleX(1);
    }
  }
`;

export const currentPageUnderscore = css`
  :after {
    display: block;
    content: " ";
    width: 100%;
    border-bottom: 0.5px solid;
  }
`;

export const homeLinksTop = css`
  @media (min-width: 900px) {
    color: var(--white);
  }
`;
