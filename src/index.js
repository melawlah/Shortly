import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
