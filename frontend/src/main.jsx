import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Register />
  </StrictMode>,
);
