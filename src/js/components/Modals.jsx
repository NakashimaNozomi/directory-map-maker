import React, { Component } from "react";
import HowtoModal from "./howto/Modal";

export default class Modals extends Component {
  constructor(props) {
    super(props);

    $(() => {
      $(".modal").modal();
    });
  }

  render() {
    return (
      <div>
        <HowtoModal />
      </div>
    );
  }
}
