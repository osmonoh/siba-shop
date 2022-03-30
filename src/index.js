import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./context/Context";

ReactDOM.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>,
  document.querySelector("#root")
);
