import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import { MainContextProvider } from "./context/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <AppRouter />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
