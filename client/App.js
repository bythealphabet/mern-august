import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import { jsx, css, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import theme from "./styles/theme";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <MainRouter />
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
