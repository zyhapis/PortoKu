import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

// Code for Styletron initialization
const engine = new Styletron();

// Render App inside StyletronProvider and BaseProvider
ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Measure performance with reportWebVitals
reportWebVitals();

// Register the service worker (or unregister if you prefer)
serviceWorker.unregister();
