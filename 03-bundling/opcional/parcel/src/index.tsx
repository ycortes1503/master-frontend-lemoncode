import { createRoot } from "react-dom/client";
import { HelloWorld } from "./components";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<HelloWorld />);
