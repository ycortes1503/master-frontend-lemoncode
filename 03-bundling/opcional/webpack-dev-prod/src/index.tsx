import { createRoot } from "react-dom/client";
import { HelloWorld } from "./components";
import "./style.css";

const root = createRoot(document.getElementById("root"));

root.render(<HelloWorld />);
