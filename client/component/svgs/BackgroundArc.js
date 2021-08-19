import React, { useEffect, useState, useRef } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
// import useScrollPositionY from "../../hooks/useScrollPositionY";
// import anime from "animejs/lib/anime.es.js";

function BackgroundArc({ cssPosition }) {
  // const svgRef = useRef(null);
  // const [animateNow, top, scroll] = useScrollPositionY(120);

  // useEffect(() => {
  //   const scrollCondition = scroll == 0 || scroll < 50;

  //   {
  //     let animationScale = scrollCondition ? 1 : scroll / 5;
  //     svgRef.current = anime({
  //       targets: ".svg",
  //       scale: animationScale,
  //       easing: "easeInOutQuint",
  //     });
  //   }
  // }, [animateNow, top]);

  const style = css`
    .rect {
      width: 100%;
      height: 100px;
      y: 120;
      x: 0;
    }
  `;

  return (
    <svg
      viewBox="0 0 1935 160"
      fill="none"
      xmlns="http:www.w3.org/2000/svg"
      css={[style, cssPosition]}
      className="svg"
    >
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M967.385 0C1437.88 0 1831.99 50.3673 1934.77 118H1935V160H0V118C102.776 50.3673 496.886 0 967.385 0Z"
        fill="#ffff"
      />

      <rect fill="#ffff" className="rect"></rect>
    </svg>
  );
}
export default BackgroundArc;
