import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ThemeProvider } from "./common/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
