import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./index.css";

createRoot(document.getElementById("internal-root-extension-container")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
