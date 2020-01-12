import React, { Component } from "react";
import FileList from "./FileList";

export default class FileItem extends Component {
  constructor(props) {
    super(props);
  }

  //通常のファイルlist
  makeNormalListDom = (_f, idx, parents) => {
    let strParentIdx =
      _f.parentIdxs.length > 0 ? _f.parentIdxs.join("-") : "Top";
    let fileName = "file" + strParentIdx + "-" + idx;
    let commentName = "comment" + strParentIdx + "-" + idx;

    let childrenFileList = null;
    //入れ子要素がある場合はfileListを内部に作成
    if (_f.children.length > 0) {
      let _p = Object.assign([], _f.parentIdxs);
      _p.push(idx);
      childrenFileList = (
        <FileList
          files={_f.children}
          parents={_p}
          onTextChangeHandler={this.props.onTextChangeHandler}
          onAddBtnClickHandler={this.props.onAddBtnClickHandler}
          onDelBtnClickHandler={this.props.onDelBtnClickHandler}
        />
      );
    }

    //追加ボタン
    let addBtn = <div className="col s12">&nbsp;</div>;
    if (_f.isDir) {
      addBtn = (
        <button
          className="btn-flat col s12 indigo-text"
          tabIndex="-1"
          onClick={e => this.props.onAddBtnClickHandler(idx, parents)}
        >
          <i className="material-icons">add_circle</i>
        </button>
      );
    }

    return (
      <li key={idx}>
        <div className="row">
          <div className="input-field col s5">
            <i className="material-icons prefix">
              {_f.isDir ? (
                <i className="far fa-folder prefix"></i>
              ) : (
                <i className="far fa-file prefix"></i>
              )}
            </i>
            <input
              id={fileName}
              name="file"
              type="text"
              className="validate"
              defaultValue={_f.name}
              onChange={e =>
                this.props.onTextChangeHandler(
                  "name",
                  e.target.value,
                  idx,
                  _f.parentIdxs
                )
              }
            />
            <label htmlFor={fileName}>ファイル名</label>
          </div>
          <div className="input-field col s5">
            <i
              className={[
                "prefix",
                _f.comment ? "fas fa-comment-dots" : "far fa-comment"
              ].join(" ")}
            ></i>
            <input
              id={commentName}
              name="comment"
              type="text"
              defaultValue={_f.comment}
              onChange={e =>
                this.props.onTextChangeHandler(
                  "comment",
                  e.target.value,
                  idx,
                  _f.parentIdxs
                )
              }
            />
            <label htmlFor={commentName}>コメント</label>
          </div>
          <div className="col s2">
            <div className="row">
              <button
                className="btn-flat col s12 red-text"
                tabIndex="-1"
                onClick={() => this.props.onDelBtnClickHandler(idx, parents)}
              >
                <i className="material-icons">delete</i>
              </button>
              {addBtn}
            </div>
          </div>
        </div>
        {childrenFileList}
      </li>
    );
  };

  render() {
    let _f = this.props.file;
    let idx = this.props.idx;
    let parents = this.props.parents || [];

    return this.makeNormalListDom(_f, idx, parents);
  }
}
