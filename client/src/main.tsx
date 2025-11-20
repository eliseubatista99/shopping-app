import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { App } from "./App";
import { AppProviders } from "./appProviders";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AppProviders>
    <App />
  </AppProviders>
  // </StrictMode>
);
