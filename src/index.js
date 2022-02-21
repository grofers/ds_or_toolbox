import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: window.REACT_APP_DSN,
  release: window.REACT_APP_SENTRY_RELEASE,
  environment: window.REACT_APP_ENVIRONMENT,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
