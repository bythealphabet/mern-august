import React, { useState, useEffect } from "react";

const useScrollPositionY = (b = 0) => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }

    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return [scrollY > b ? "goUp" : "", scrollY == 0, scrollY];
};

export default useScrollPositionY;
