import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./componenets/GlobalStyle";
import { Reader } from "./componenets/Reader/Reader";
import publications from "./publications.json";

const theme = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>
);
