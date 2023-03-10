import "./index.css";
import "flatpickr/dist/themes/material_blue.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { HashRouter } from "react-router-dom";
import Modal from "react-modal";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./contexts/UserContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
Modal.setAppElement("#root");

root.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
        </UserProvider>
        <Toaster position="bottom-center" />
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
