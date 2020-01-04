import React, { Component } from "react";

import Input from "./dirStructure/Input.jsx";
import Output from "./dirStructure/Output.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOutputShow: true
    };

    $(() => {
      $(".tooltipped").tooltip();
    });
  }

  toggleOutputDisp = () => {
    this.setState({
      isOutputShow: !this.state.isOutputShow
    });
  };

  render() {
    return (
      <main className="main-content">
        <div className="row main-content-row">
          <Input isOutputShow={this.state.isOutputShow} />
          <Output isShow={this.state.isOutputShow} />
        </div>
        <a
          className="btn-floating btn-large waves-effect waves-light teal output-toggle-btn tooltipped"
          data-position="top"
          data-tooltip={this.state.isOutputShow ? "出力を非表示" : "出力を表示"}
          onClick={this.toggleOutputDisp}
        >
          <i
            className={
              this.state.isOutputShow ? "fas fa-eye-slash" : "fas fa-eye"
            }
          ></i>
        </a>
      </main>
    );
  }
}
