import * as React from "react";
import ReactDOM from "react-dom/client";
import "./mystyles.scss";
import { HelloWorld } from "./components/hello-world.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
