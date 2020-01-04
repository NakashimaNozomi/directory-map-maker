import React, { Component } from "react";

export default function Modal(props) {
  return (
    <div id="modalHowto" className="modal bottom-sheet howto-content">
      <div className="modal-content">
        <div className="row">
          <h3 className="col l8 s12">
            使い方
            <br />
            <small className="teal-text">How to UseHow to Use</small>
          </h3>
          <div className="right">
            <button className="btn-floating grey modal-close howto-closeBtn">
              <i className="material-icons">close</i>
            </button>
          </div>
        </div>
        <ul className="collection">
          <li className="collection-item">
            ファイル名は末尾にスラッシュ<span className="code">/</span>
            をつけるとディレクトリとみなされます。
          </li>
        </ul>
      </div>
    </div>
  );
}
