import React, { Component } from "react";

export default function Btn(props) {
  return (
    <div>
      <button
        data-target="modalHowto"
        className="btn swaves-effect swaves-red swhite spink-text modal-trigger"
      >
        <i className="fas fa-question-circle left"></i> How to use
      </button>
    </div>
  );
}
