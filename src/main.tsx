import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConvexProvider, ConvexReactClient } from "convex/react";
// import convexConfig from "../convex/_generated/config";

// Create the Convex client instance
// const convex = new ConvexReactClient(convexConfig);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <ConvexProvider client={convex}> */}
        <App />
      {/* </ConvexProvider> */}
    </BrowserRouter>
  </StrictMode>
);
