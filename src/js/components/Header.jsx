import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    $(document).ready(function() {
      $(".sidenav").sidenav({
        menuWidth: 300,
        edge: "right"
      });
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <h1 className="brand-logo">DirStructMaker</h1>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  href="https://www.amazon.jp/hz/wishlist/ls/3RESKZEXLJ5RH?ref_=wl_share"
                  target="_blank"
                  className="waves-effect waves-light btn"
                >
                  <i className="material-icons right">favorite</i>
                  マイほしい物リスト
                </a>
              </li>
            </ul>
            <a
              href="#"
              data-target="mobile-demo"
              className="right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a
              href="https://www.amazon.jp/hz/wishlist/ls/3RESKZEXLJ5RH?ref_=wl_share"
              target="_blank"
              className="waves-effect waves-light btn"
            >
              <i className="material-icons right">favorite</i>マイほしい物リスト
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
