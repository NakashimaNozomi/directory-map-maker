import React, { Component } from "react";
import FileItem from "./FileItem";

export default class FileList extends Component {
  constructor(props) {
    super(props);
  }
  //トップディレクトリにファイルを追加するボタンのlist
  makeTopFileAddBtnDom = (idx, parents) => {
    return (
      <li>
        <div className="row">
          <button
            className="btn waves-effect waves-light red col s2 indigo"
            tabIndex="-1"
            onClick={e => this.props.onAddBtnClickHandler(idx, parents)}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </li>
    );
  };

  render() {
    try {
      let parents = this.props.parents || [];
      let _files = this.props.files;
      let lists = [];
      _files.map((_f, idx) => {
        lists.push(
          <FileItem
            key={idx}
            file={_f}
            idx={idx}
            parents={parents}
            onTextChangeHandler={this.props.onTextChangeHandler}
            onAddBtnClickHandler={this.props.onAddBtnClickHandler}
            onDelBtnClickHandler={this.props.onDelBtnClickHandler}
          />
        );
      });
      return (
        <ul
          className={
            parents.length > 0
              ? "border-left border-bold-super"
              : "form-div-collection"
          }
        >
          {lists}
          {parents.length > 0 ? "" : this.makeTopFileAddBtnDom(-1, [])}
        </ul>
      );
    } catch (e) {
      console.error(e);
    }
  }
}
