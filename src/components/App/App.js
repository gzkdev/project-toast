import React from "react";

import Footer from "../Footer";
import ToastProvider from "../ToastProvider";
import ToastPlayground from "../ToastPlayground";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
