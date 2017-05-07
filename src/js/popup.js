import "../css/popup.css";
import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from "./components/PopupMain.jsx";

render(
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>,
  window.document.getElementById("app-container")
);
