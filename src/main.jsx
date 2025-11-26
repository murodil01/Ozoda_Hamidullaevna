import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1F4F4D",
          color: "#fff",
          borderRadius: "14px",
          padding: "14px 20px",
          fontSize: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        },
        success: {
          style: {
            background: "#26938A",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#26938A",
          },
        },
        error: {
          style: {
            background: "#E11D48",
          },
        },
      }}
    />
    <App />
  </StrictMode>
);
