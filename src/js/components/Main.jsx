import React, { Component } from "react";

import Input from "./dirStructure/Input.jsx";
import Output from "./dirStructure/Output.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.defaultFile = {
      name: "",
      comment: "",
      isDir: false,
      parentIdxs: [],
      children: []
    };

    this.state = {
      isOutputShow: true,
      files: [
        {
          name: "ファイルだよ",
          comment: "",
          isDir: false,
          parentIdxs: [],
          children: []
        },
        {
          name: "ディレクトリだよ",
          comment: "",
          isDir: true,
          parentIdxs: [],
          children: [
            {
              name: "ファイルコメントあり",
              comment: "あああああああああああ",
              isDir: false,
              parentIdxs: [1],
              children: []
            },
            {
              name: "ディレクトリコメントあり",
              comment: "ここにコメント",
              isDir: true,
              parentIdxs: [1],
              children: [
                {
                  name: "AAAAA",
                  comment: "",
                  isDir: false,
                  parentIdxs: [1, 1],
                  children: []
                },
                {
                  name: "BBBBBB",
                  comment: "",
                  isDir: true,
                  parentIdxs: [1, 1],
                  children: [
                    {
                      name: "猫猫",
                      comment: "",
                      isDir: false,
                      parentIdxs: [1, 1, 1],
                      children: []
                    },
                    {
                      name: "犬犬犬",
                      comment: "",
                      isDir: false,
                      parentIdxs: [1, 1, 1],
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "ほげほげ",
          comment: "ホゲコメントほげほげぇえ",
          isDir: false,
          parentIdxs: [],
          children: []
        }
      ]
    };

    $(() => {
      $(".tooltipped").tooltip();
      $(".tabs").tabs();
    });
  }

  toggleOutputDisp = () => {
    this.setState({
      isOutputShow: !this.state.isOutputShow
    });
    setTimeout(() => {
      $(".tabs").tabs("updateTabIndicator");
    }, 10);
  };

  onTextChangeHandler = (key, value, idx, parentIdxs) => {
    console.log(key, value, idx, parentIdxs);
  };

  onAddBtnClickHandler = (idx, parentIdxs) => {
    console.log(idx, parentIdxs);
  };

  onDelBtnClickHandler = (idx, parentIdxs) => {
    console.log(idx, parentIdxs);
  };

  render() {
    return (
      <main className="main-content">
        <div className="row main-content-row">
          <Input
            isOutputShow={this.state.isOutputShow}
            files={this.state.files}
            onTextChangeHandler={this.onTextChangeHandler}
            onAddBtnClickHandler={this.onAddBtnClickHandler}
            onDelBtnClickHandler={this.onDelBtnClickHandler}
          />
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
