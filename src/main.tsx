import "./index.css";
import { App } from "@/app/";
import React from "react";
import ReactDOM from "react-dom/client";

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./test/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
