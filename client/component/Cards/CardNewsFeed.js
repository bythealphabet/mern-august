import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function CardNewsFeed({ cssPosition }) {
  return (
    <div className="home-news-feed" css={cssPosition}>
      <div className="card home-feed-card" css={[cardStyles]}>
        <img
          src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="coding"
        />
        <div className="home-feed-card-text">
          <p className="title">
            How to make your company website based on bootstrap framework on
            localhost?
          </p>
          <p className="subtitle">
            September 23 2021 / by <span>Isaac Lucas</span>
          </p>
        </div>
      </div>
    </div>
  );
}

var cardStyles = css`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0 1em;

  margin-bottom: 4em;

  img {
    height: 180px;
  }

  .home-feed-card-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .subtitle {
      justify-self: center;
    }
  }
`;
