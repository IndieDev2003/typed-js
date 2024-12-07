import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Suspense fallback={".....Loading"}>
        <App /> 
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  </>
);
