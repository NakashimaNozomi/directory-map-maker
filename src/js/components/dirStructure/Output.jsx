import React, { Component } from "react";

export default class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // scale-transition scale-out
      <div className="col l4 s12 result-content">
        <h2>Output</h2>
        <div className="card">
          <div className="card-action right-align border-bottom">
            {/* <a href="#">This is a link</a> */}
            <button className="waves-effect waves-light btn">
              <i className="far fa-clipboard left"></i>結果をコピー
            </button>
          </div>
          <div className="card-content">
            <textarea
              className="materialize-textarea js-result-textarea"
              placeholder="ここに結果が表示されます！"
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}
