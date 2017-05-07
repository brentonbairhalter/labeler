import "../css/popup.css";
import React from "react";
import { render } from "react-dom";

import Main from "./components/PopupMain.jsx";

render(
  <Main/>,
  window.document.getElementById("app-container")
);
