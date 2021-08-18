import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

////CORE
import Home from "./container/core/home/Home";
import About from "./container/core/About";
import Contact from "./container/core/Contact";

//NAVIGATION

import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";

function MainRouter(props) {
  const [active, setActive] = useState(false);
  const isMenuActive = (isactive) => setActive(isactive);

  const stopScroll = css`
    /* position: fixed; */
    overflow-y: hidden;
  `;

  const styles = css`
    ${active ? stopScroll : null}
  `;

  return (
    <div className="base-grid main-router-rows" css={styles}>
      <Header isMenuActive={isMenuActive} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default MainRouter;
