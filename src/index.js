import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { TasksProvider, ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
