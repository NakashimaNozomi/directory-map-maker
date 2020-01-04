import React, { Component } from "react";
import { render } from "react-dom";

import MyHeader from "./components/Header";
import MyMain from "./components/Main";
import Modals from "./components/Modals";
import MyFooter from "./components/Footer";

render(
  <div className="wrapper blue-grey lighten-4">
    <MyHeader />
    <MyMain />
    <Modals />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
