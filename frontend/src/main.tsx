import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);
