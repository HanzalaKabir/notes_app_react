import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotesProvider } from "./Context";
import { AccessTokenProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AccessTokenProvider>
    <NotesProvider>
      <App />
    </NotesProvider>
    </AccessTokenProvider>
  </React.StrictMode>
);
