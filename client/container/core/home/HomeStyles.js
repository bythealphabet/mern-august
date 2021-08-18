import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import backgroundBeach from "../../../assets/images/beach.jpg";

export const homeStyles = css`
  display: grid;
  grid-template-rows: var(--headerHeight) minmax(300px, 45vh) 200px 400px 300px auto;

  grid-column: 1 / -1;
  grid-row: 1 / span 2;

  @media (min-width: 900px) {
    grid-template-rows: var(--headerHeight) minmax(400px, 55vh) 50px 100px 150px 150px 300px 400px 300px auto;
  }

  @media (min-width: 1100px) {
    grid-template-rows: var(--headerHeight) minmax(400px, 60vh) 135px 65px 50px 150px 300px 400px 300px auto;
  }

  .home-background {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(195, 0, 0, 0) 100%
      ),
      url(${backgroundBeach});
    background-position: center;
    background-size: cover;
    grid-column: 1 / -1;
    grid-row: 1 / span 3;

    @media (min-width: 900px) {
      background-position: 50% 0%;
      grid-row: 1 / span 4;
    }

    @media (min-width: 1100px) {
      background-position: 50% 21%;
      grid-row: 1 / span 4;
    }
  }

  .home-hero {
    grid-column: 2 / -2;
    grid-row: 2;

    @media (min-width: 900px) {
      grid-column: 3 / -3;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;

    @media (min-width: 900px) {
      justify-content: center;
    }

    h1 {
      color: #ffff;
      font-size: 1.6rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1em;

      @media (min-width: 900px) {
        font-size: 2rem;
      }

      @media (min-width: 1100px) {
        font-size: 3rem;
      }
    }

    .hero-btn {
      border: none;
      border-radius: 10px;
      background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
      transition: 0.5s ease-in-out;

      :hover,
      :focus {
        /* border: solid 0.3em #1e628a; */
        background: transparent;
        background-image: linear-gradient(
          to top,
          #0c3483 0%,
          #a2b6df 100%,
          #6b8cce 100%,
          #a2b6df 100%
        );
        color: var(--white);
      }

      @media (min-width: 1100px) {
        font-size: 2rem;
      }
    }
  }

  .home-about {
    z-index: 2;
    background-color: #ffff;
    display: grid;
    grid-template-rows: 100px auto 40px;

    grid-column: 1 / -1;
    grid-row: 3;

    @media (min-width: 900px) {
      margin-top: 1em;
      grid-row: 4;
    }

    @media (min-width: 1100px) {
      margin-top: 1em;
      grid-column: 2 / -2;
      grid-row: 4;
    }

    .home-about-heading {
      color: #1e628a;
      grid-column: 2 / -2;
      grid-row: 1;
      justify-self: center;
      font-weight: 300;

      :after,
      :after {
        content: ". . .";
        display: block;
        text-align: center;
      }
    }

    .home-about-text {
      font-size: 1.1rem;
      text-align: center;

      grid-column: 2 / -2;
      grid-row: 2;
      justify-self: center;

      @media (min-width: 900px) {
        font-size: 1.4rem;
        grid-column: 3 / -3;
      }

      @media (min-width: 1100px) {
        font-size: 1.4rem;
        grid-column: 5 / -5;
      }
    }

    .home-about-link {
      grid-column: 2 / -2;
      justify-self: center;
    }
  }
`;
