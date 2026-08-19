import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx"; // ✅ import context provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/MedicalProfile">
      <AppContextProvider> 
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
