import React, { Component } from "react";

export default class Output extends Component {
  constructor(props) {
    super(props);
  }

  onCopyClickHandler = () => {
    M.toast({ html: "コピーしました", classes: "rounded" });
  };

  render() {
    return (
      <div
        className={[
          "output-content",
          this.props.isShow ? "col l4 s12" : "hide"
        ].join(" ")}
      >
        <h2 className="red-text text-lighten-1">Output</h2>
        <div className="card">
          <div className="card-action right-align border-bottom">
            <button
              className="waves-effect waves-light btn indigo"
              onClick={this.onCopyClickHandler}
            >
              <i className="far fa-clipboard left"></i>
              結果をコピー
            </button>
          </div>
          <div className="card-content">
            <textarea
              className="materialize-textarea"
              placeholder="ここに結果が表示されます！"
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}
