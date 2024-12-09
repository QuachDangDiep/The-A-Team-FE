import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

const clientId =
  "1029470407015-aaqinqbadbk57cu50khjfl44ubmg08tv.apps.googleusercontent.com"; // Thay bằng Client ID của bạn

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      {" "}
      {/* Bọc App trong GoogleOAuthProvider */}
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
