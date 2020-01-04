import React, { Component } from "react";

export default function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">
              <i className="material-icons left">warning</i> 注意
            </h5>
            <p className="grey-text text-lighten-4">
              こちらのサービスによるいかなるトラブルも補償できません。
              <br />
              自己責任！自己防衛だ！
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/NakashimaNozomi/"
                  target="_blank"
                >
                  <i className="fab fa-github-alt"></i> Github
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://twitter.com/_nakashimamura"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://qiita.com/_nakashimamura"
                  target="_blank"
                >
                  <i className="fas fa-cat"></i> Qiita
                </a>
              </li>
            </ul>
            <a
              href="https://www.amazon.jp/hz/wishlist/ls/3RESKZEXLJ5RH?ref_=wl_share"
              target="_blank"
              className="waves-effect waves-light btn-small"
            >
              <i className="material-icons right">favorite</i>マイほしい物リスト
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 　
          <a href="https://github.com/NakashimaNozomi/" target="_blank">
            Nozomi Nakamura
          </a>
          <a
            className="blue-text text-darken-1 right"
            href="https://nakashimanozomi.github.io/directory-map-maker/blob/master/LICENSE"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
