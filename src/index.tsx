import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx"; // Explicitly specify the `.tsx` extension

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
