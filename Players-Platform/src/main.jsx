import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full min-h-screen">
      <App />
    </div>
    <ToastContainer autoClose={1000} position="top-center" className="max-w-[90%] sm:max-w-md" />
  </StrictMode>
);
