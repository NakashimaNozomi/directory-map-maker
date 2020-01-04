import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    $(() => {
      $(".tabs").tabs();
    });
  }

  render() {
    return (
      <div className="input-content col l8 s12 z-depth-2 white">
        <div className="row valign-wrapper">
          <h2 className="valign">Input</h2>
        </div>
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
            <div className="card-panel">
              <p>
                ファイル名は末尾にスラッシュ <span className="code">/</span>{" "}
                をつけるとディレクトリとみなされます。
              </p>
            </div>
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
                        tabindex="-1"
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
                        tabindex="-1"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                      <button
                        className="btn-flat col s12 teal-text"
                        tabindex="-1"
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
                        tabindex="-1"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                      <button
                        className="btn-flat col s12 teal-text"
                        tabindex="-1"
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
                            tabindex="-1"
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
                            tabindex="-1"
                          >
                            <i className="material-icons">delete</i>
                          </button>
                          <button
                            className="btn-flat col s12 teal-text"
                            tabindex="-1"
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
                                tabindex="-1"
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
                  <button className="btn waves-effect waves-light red col s2">
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
