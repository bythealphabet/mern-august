import React, { useState, useRef, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import BackgroundArc from "../../../component/svgs/BackgroundArc";
import { homeStyles } from "./HomeStyles";

function Home() {
  var backgroundArcSvg = css`
    grid-column: 1 / -1;
    grid-row: 2;

    align-self: flex-end;

    @media (min-width: 500px) {
      grid-row: 3;
      align-self: flex-start;
    }

    @media (min-width: 1100px) {
      grid-row: 4 / span 2;
      align-self: flex-end;
    }
  `;

  return (
    <div className="base-grid hero" css={homeStyles}>
      <div className="home-background"></div>

      <section className="home-hero base-grid">
        <h1 className="title">
          Un Kompania ku ta traha Website na <span>Korsou</span>
        </h1>
        <Link to="/" className="btn hero-btn">
          Diskubri
        </Link>
      </section>

      <section className="base-grid home-about">
        <h3 className="title home-about-heading">Kiko Nos Ta Hasi</h3>
        <p className="home-about-text">
          We build Websites, That are beautiful, Your Clients will be happy to
          use, Will be easy for new clients to find you. and you will be able to
          increase your sales.
        </p>
        <Link to="/" className="home-about-link">
          ... click here to learn more
        </Link>
      </section>
      <BackgroundArc cssPosition={backgroundArcSvg} />
    </div>
  );
}

export default Home;
