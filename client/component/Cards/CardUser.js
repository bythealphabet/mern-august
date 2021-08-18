import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function CardUser({ user, cssPosition }) {
  const styles = css`
    @media (max-width: 500px) {
      height: 300px;
    }
  `;
  return (
    <div className="card" css={[styles, cssPosition]}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={user?.image} alt={user?.desc} />
        </figure>
      </div>
      <div className="card-content ">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{user?.name}</p>
            <p className="subtitle is-6">{user?.twitter}</p>
          </div>
        </div>
        <div className="content">
          <p className="title is-6">{user?.jobPosition}</p>
        </div>
      </div>
    </div>
  );
}
