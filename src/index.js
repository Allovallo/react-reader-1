import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./componenets/GlobalStyle";
import { Reader } from "./componenets/Reader/Reader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Reader />
    </ThemeProvider>
  </React.StrictMode>
);
