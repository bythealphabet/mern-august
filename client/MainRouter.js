import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

////CORE
import Home from "./container/core/home/Home";

//NAVIGATION
import Header from "./container/navigation/header/Header";
import Footer from "./container/navigation/footer/Footer";

//USER AUTH
import Signup from "./container/user/auth/Signup";
import Signin from "./container/user/auth/Signin";
import Confirmation from "./container/user/auth/Confirmation";

function MainRouter(props) {
  const [active, setActive] = useState(false);
  const isMenuActive = (isactive) => setActive(isactive);

  const stopScroll = css`
    /* position: fixed; */
    overflow-y: hidden;
  `;

  const styles = css`
    ${active ? stopScroll : null}
    display: grid;
    grid-template-rows: var(--headerHeight) minmax(100vh, auto) var(
        --footerHeight
      );
  `;

  return (
    <div className="base-grid" css={styles}>
      <Header isMenuActive={isMenuActive} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Signin />
        </Route>
        <Route path="/confirmation/:token">
          <Confirmation />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default MainRouter;
