import "../css/print.css";
import React from "react";
import { render } from "react-dom";

import Print from "./components/print/print_page.jsx";

render(
  <Print/>,
  window.document.getElementById("print-container")
);
