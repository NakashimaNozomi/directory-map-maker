import util from "../utils"
import React, { useState } from "react";

import Input from "./dirStructure/Input.jsx";
import Output from "./dirStructure/Output.jsx";

export default function Main(props) {
  const defaultFile= {
    name: "",
    comment: "",
    isDir: false,
    parentIdxs: [],
    children: []
  };

  const [isOutputShow, updateIsOutputShow] = useState(true);
  const [files, updateFiles] = useState([
      {
        name: "",
        comment: "",
        isDir: false,
        parentIdxs: [],
        children: []
      }
  ]);

  $(() => {
    $(".tooltipped").tooltip();
    $(".tabs").tabs();
  });

  /**
   * 出力エリアの表示非表示を切り替える
   */
  const toggleOutputDisp = () => {
    updateIsOutputShow(!isOutputShow);
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
  const onTextChangeHandler = (key, value, idx, parentIdxs) => {
    _updateFileObjVal(key, value, idx, parentIdxs);
  };

  /**
   * ファイル追加があった時のハンドラ
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  const onAddBtnClickHandler = (idx, parentIdxs) => {
    let _files = util.copyObject(files);
    let target = _getTargetFileObj(_files, idx, parentIdxs);
    let _parentIdxs = target.parentIdxs ? util.copyObject(target.parentIdxs) : [];
    console.log(_parentIdxs);
    if (idx != -1 || parentIdxs.length > 0) {
      //トップの階層じゃない場合はchildrenに新しいファイルObjを挿入
      target = target["children"];
      _parentIdxs.push(idx);
    }
    let tmp = util.copyObject(defaultFile);
    target.push(Object.assign({}, { ...tmp, ...{ parentIdxs: _parentIdxs } }));
    updateFiles(_files);
  };

  /**
   * ファイル削除があった時のハンドラ
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  const onDelBtnClickHandler = (idx, parentIdxs) => {};

  /**
   * filesObjectの対象の要素まで潜る
   *
   * @param integer idx
   * @param array parentIdxs 親要素のidxの配列
   */
  const _getTargetFileObj = (_f, idx, parentIdxs) => {
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
   * @param string key
   * @param Object value
   */
  const _updateFileObjVal = (key, value, idx, parentIdxs) => {
    let _files = util.copyObject(files);
    // 対象の階層まで潜る
    let target = _getTargetFileObj(_files, idx, parentIdxs);

    console.log(target);
    // 潜り終えた際に値を書き換える
    target[key] = name;
    //keyが[ファイル名]でスラッシュを含む場合はisDirをtrueに
    if (key == "name") {
      if (value.match(/(\/|／)$/)) {
        target["isDir"] = true;
      } else {
        target["isDir"] = false;
      }
    }

    updateFiles(_files);
  };

  return (
    <main className="main-content">
      <div className="row main-content-row">
        <Input
          isOutputShow={isOutputShow}
          files={files}
          onTextChangeHandler={onTextChangeHandler}
          onAddBtnClickHandler={onAddBtnClickHandler}
          onDelBtnClickHandler={onDelBtnClickHandler}
        />
        <Output isShow={isOutputShow} />
      </div>
      <a
        className="btn-floating btn-large waves-effect waves-light teal output-toggle-btn tooltipped"
        data-position="top"
        data-tooltip={isOutputShow ? "出力を非表示" : "出力を表示"}
        onClick={toggleOutputDisp}
      >
        <i
          className={
            isOutputShow ? "fas fa-eye-slash" : "fas fa-eye"
          }
        ></i>
      </a>
    </main>
  );
}
