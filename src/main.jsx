import React from "react";
import ReactDOM from "react-dom/client";
import MyWidget from "./MyWidget";

/** 로컬 테스트용 */
// renderWidget("my-container");

function renderWidget(containerId) {
  const rootEl = document.getElementById(containerId);
  if (!rootEl) return;

  const root = ReactDOM.createRoot(rootEl);

  root.render(<MyWidget />);
}

/* 글로벌로 노출 */
window.MyWidget = { renderWidget };
