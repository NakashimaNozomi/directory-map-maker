import React, { Component } from "react";

import Input from "./dirStructure/Input.jsx";
import Output from "./dirStructure/Output.jsx";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main-content">
        {/* <h1 className="center-align z-depth-1">構成図を作りましょう</h1> */}
        <div className="row main-content-row">
          <Input />
          <Output />
        </div>
        {/* TODO: Outputをtoggle可能にしたい */}
        {/* <a className="btn-floating btn-large waves-effect waves-light teal result-toggle-btn">
          <i className="material-icons">remove_red_eye</i>
        </a> */}
      </main>
    );
  }
}
