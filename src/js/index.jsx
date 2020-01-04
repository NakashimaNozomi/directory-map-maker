import React, { Component } from "react";
import { render } from "react-dom";

import MyHeader from "./components/Header.jsx";
import MyMain from "./components/Main.jsx";
import MyFooter from "./components/Footer.jsx";

render(
  <div className="wrapper blue-grey lighten-4">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
