import React, { Component } from 'react';
import { render } from 'react-dom';


import MyHeader from './components/Header.jsx';

render(
    <div>
      <MyHeader />
      <main />
    </div>,
    document.getElementById("root")
);