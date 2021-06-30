import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

//componente raíz
/*const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/

//JSX
ReactDOM.render(<App />, document.getElementById("root"));
