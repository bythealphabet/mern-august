import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import AuthProvider from "./auth/AuthContext";
import { jsx, css, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import theme from "./styles/theme";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <MainRouter />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default hot(App);
