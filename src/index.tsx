import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from React 18
import App from "./App"; // Ensure correct import
import './output.css'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
