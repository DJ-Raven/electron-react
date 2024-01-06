import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
