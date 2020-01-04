import React, { Component } from "react";
import HowtoBtn from "../howto/Btn";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={[
          "input-content col s12 z-depth-2 white",
          this.props.isOutputShow ? "l8" : "l12"
        ].join(" ")}
      >
        <div className="row valign-wrapper">
          <h2 className="valign">Input</h2>
        </div>
        <HowtoBtn />
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#writeArea">入力</a>
              </li>
              <li className="tab col s3">
                <a href="#zipArea">ZIP</a>
              </li>
            </ul>
          </div>
          <div id="writeArea" className="col s12 input-content-writeArea">
            <ul className="form-div-collection">
              {/* file */}
              <li>
                <div className="row">
                  <div className="input-field col s5">
                    <i className="material-icons prefix">insert_drive_file</i>
                    <input id="id1" type="text" className="validate" />
                    <label htmlFor="id1">ファイル名</label>
                  </div>
                  <div className="input-field col s5">
                    <i className="material-icons prefix">textsms</i>
                    <input id="id2" type="text" className="validate" />
                    <label htmlFor="id2">コメント</label>
                  </div>
                  <div className="col s2">
                    <div className="row">
                      <button
                        className="btn-flat col s12 red-text"
                        tabIndex="-1"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                      <div className="col s12">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </li>

              {/* dir */}
              <li>
                <div className="row">
                  <div className="input-field col s5">
                    <i className="material-icons prefix">folder_open</i>
                    <input id="id3" type="text" className="validate" />
                    <label htmlFor="id3">ファイル名</label>
                  </div>
                  <div className="input-field col s5">
                    <i className="material-icons prefix">textsms</i>
                    <input id="id4" type="text" className="validate" />
                    <label htmlFor="id4">コメント</label>
                  </div>
                  <div className="col s2">
                    <div className="row">
                      <button
                        className="btn-flat col s12 red-text"
                        tabIndex="-1"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                      <button
                        className="btn-flat col s12 indigo-text"
                        tabIndex="-1"
                      >
                        <i className="material-icons">add_circle</i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              {/* dir with children */}
              <li>
                <div className="row">
                  <div className="input-field col s5">
                    <i className="material-icons prefix">folder_open</i>
                    <input id="id3" type="text" className="validate" />
                    <label htmlFor="id3">ファイル名</label>
                  </div>
                  <div className="input-field col s5">
                    <i className="material-icons prefix">textsms</i>
                    <input id="id4" type="text" className="validate" />
                    <label htmlFor="id4">コメント</label>
                  </div>
                  <div className="col s2">
                    <div className="row">
                      <button
                        className="btn-flat col s12 red-text"
                        tabIndex="-1"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                      <button
                        className="btn-flat col s12 indigo-text"
                        tabIndex="-1"
                      >
                        <i className="material-icons">add_circle</i>
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="border-left border-bold-super">
                  <li>
                    <div className="row">
                      <div className="input-field col s5">
                        <i className="material-icons prefix">
                          insert_drive_file
                        </i>
                        <input id="id1" type="text" className="validate" />
                        <label htmlFor="id1">ファイル名</label>
                      </div>
                      <div className="input-field col s5">
                        <i className="material-icons prefix">textsms</i>
                        <input id="id2" type="text" className="validate" />
                        <label htmlFor="id2">コメント</label>
                      </div>
                      <div className="col s2">
                        <div className="row">
                          <button
                            className="btn-flat col s12 red-text"
                            tabIndex="-1"
                          >
                            <i className="material-icons">delete</i>
                          </button>
                          <div className="col s12">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="input-field col s5">
                        <i className="material-icons prefix">folder_open</i>
                        <input id="id3" type="text" className="validate" />
                        <label htmlFor="id3">ファイル名</label>
                      </div>
                      <div className="input-field col s5">
                        <i className="material-icons prefix">textsms</i>
                        <input id="id4" type="text" className="validate" />
                        <label htmlFor="id4">コメント</label>
                      </div>
                      <div className="col s2">
                        <div className="row">
                          <button
                            className="btn-flat col s12 red-text"
                            tabIndex="-1"
                          >
                            <i className="material-icons">delete</i>
                          </button>
                          <button
                            className="btn-flat col s12 indigo-text"
                            tabIndex="-1"
                          >
                            <i className="material-icons">add_circle</i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className="border-left border-bold-super">
                      <li>
                        <div className="row">
                          <div className="input-field col s5">
                            <i className="material-icons prefix">
                              insert_drive_file
                            </i>
                            <input id="id1" type="text" className="validate" />
                            <label htmlFor="id1">ファイル名</label>
                          </div>
                          <div className="input-field col s5">
                            <i className="material-icons prefix">textsms</i>
                            <input id="id2" type="text" className="validate" />
                            <label htmlFor="id2">コメント</label>
                          </div>
                          <div className="col s2">
                            <div className="row">
                              <button
                                className="btn-flat col s12 red-text"
                                tabIndex="-1"
                              >
                                <i className="material-icons">delete</i>
                              </button>
                              <div className="col s12">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* normal add file */}
              <li>
                <div className="row">
                  <button className="btn waves-effect waves-light red col s2 indigo">
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div id="zipArea" className="col s12">
            準備中です＞＜
          </div>
        </div>
      </div>
    );
  }
}
