import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Depense from "./component/Depense";

function ROOT() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/depense" element={<Depense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ROOT;