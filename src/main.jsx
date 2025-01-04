import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("content__allDevice-shop-checkout")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
