'use strict';
import './styles/index.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Theme } from './components/ThemeObserver'

ReactDOM.render(<App />, document.getElementById("root"));

// new Theme('blue');

// console.error('Failed to load resource: the server responded with a status of 402 (Payment Required) ');
