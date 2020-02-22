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
          name: "",
          comment: "",
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

  /**
   * 出力エリアの表示非表示を切り替える
   */
  toggleOutputDisp = () => {
    this.setState({
      isOutputShow: !this.state.isOutputShow
    });
    setTimeout(() => {
      $(".tabs").tabs("updateTabIndicator");
    }, 10);
  };

  /**
   * テキストに何か変更があった時のハンドラ
   *
   * @param string key 変更する対象
   * @param Object value 値
   * @param integer idx 変更する対象のidx
   * @param array parentIdxs 親要素のidxの配列
   */
  onTextChangeHandler = (key, value, idx, parentIdxs) => {
    // 対象の階層まで潜る
    let target = this._getTargetFileObj(idx, parentIdxs);
    // 潜り終えた際に値を書き換える
    this._updateFileObjVal(target, key, value);
    this.setState({
      files: this.state.files
    });
  };

  /**
   * ファイル追加があった時のハンドラ
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  onAddBtnClickHandler = (idx, parentIdxs) => {
    let target = this._getTargetFileObj(idx, parentIdxs);
    let _parentIdxs = [];
    if (idx != -1 || parentIdxs.length > 0) {
      //トップの階層じゃない場合はchildrenに新しいファイルObjを挿入
      target = target["children"];
      _parentIdxs.push(idx);
    }
    let tmp = JSON.parse(JSON.stringify(this.defaultFile));
    target.push(JSON.parse(JSON.stringify({ ...tmp, ...{ parentIdxs: _parentIdxs } })));
    this.setState({
      files: this.state.files
    });
  };

  /**
   * ファイル削除があった時のハンドラ
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  onDelBtnClickHandler = (idx, parentIdxs) => {};

  /**
   * filesObjectの対象の要素まで潜る
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  _getTargetFileObj = (idx, parentIdxs) => {
    let _f = this.state.files;
    let target = _f;

    for (let i = 0; i < parentIdxs.length; ++i) {
      let k = parentIdxs[i];
      if (i != 0) {
        target = target["children"][k];
      } else {
        target = target[k];
      }
    }

    if (idx != -1) {
      if (parentIdxs.length > 0) {
        target = target["children"][idx];
      } else {
        target = target[idx];
      }
    }
    return target;
  };

  /**
   * fileObjの値をアップデートする。
   * keyがnameの場合はisDirも合わせて更新する
   *
   * @param Object target
   * @param string key
   * @param Object value
   */
  _updateFileObjVal = (target, key, value) => {
    target[key] = name;
    //keyが[ファイル名]でスラッシュを含む場合はisDirをtrueに
    if (key == "name") {
      if (value.match(/(\/|／)$/)) {
        target["isDir"] = true;
      } else {
        target["isDir"] = false;
      }
    }
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
