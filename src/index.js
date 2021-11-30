import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./app/App";
import "./i18n";
import { store } from "./redux/store";
import { theme } from "./theme/theme";

import ErrorBoundary from "./commons/components/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
