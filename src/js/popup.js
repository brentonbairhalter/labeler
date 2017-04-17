import "../css/popup.css";
import React from "react";
import { render } from "react-dom";

import Greeting from "./components/greeting_component.jsx";

render(
  <Greeting/>,
  window.document.getElementById("app-container")
);
