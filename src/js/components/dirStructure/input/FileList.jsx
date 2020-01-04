import React, { Component } from "react";
import FileItem from "./FileItem";

export default class FileList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      </ul>
    );
  }
}
