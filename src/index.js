import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./context/Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>,
  document.querySelector("#root")
);
