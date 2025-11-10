import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Create the Convex client instance
// const convex = new ConvexReactClient(convexConfig);
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
// const convex = new ConvexReactClient(process);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </BrowserRouter>
  </StrictMode>
);
