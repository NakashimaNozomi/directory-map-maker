import React, { Component } from "react";
import FileList from "./input/FileList";
import HowtoBtn from "../howto/Btn";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={[
          "input-content col s12 z-depth-2 white",
          this.props.isOutputShow ? "l8" : "l12"
        ].join(" ")}
      >
        <div className="row valign-wrapper">
          <h2 className="valign">Input</h2>
        </div>
        <HowtoBtn />
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#writeArea">入力</a>
              </li>
              <li className="tab col s3">
                <a href="#zipArea">ZIP</a>
              </li>
            </ul>
          </div>
          <div id="writeArea" className="col s12 input-content-writeArea">
            <FileList
              files={this.props.files}
              onTextChangeHandler={this.props.onTextChangeHandler}
              onAddBtnClickHandler={this.props.onAddBtnClickHandler}
              onDelBtnClickHandler={this.props.onDelBtnClickHandler}
            />
          </div>

          <div id="zipArea" className="col s12">
            準備中です＞＜
          </div>
        </div>
      </div>
    );
  }
}
