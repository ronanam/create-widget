import React from "react";
import ReactDOM from "react-dom/client";
import MyWidget from "./MyWidget";

function mount(container) {
  if (!container) {
    console.error("MyWidget.mount: container is required");
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(MyWidget));
}

// UMD 빌드용 export
if (window !== "undefined") {
  window.MyWidget = MyWidget;
  window.MyWidget.mount = mount;
}

export { MyWidget, mount };
