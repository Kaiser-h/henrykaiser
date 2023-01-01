import React from "react";
import "./App.css";
import PdfViewer from "./components/PdfViewer";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":pdfName" element={<PdfViewer />} />
      </Routes>
    </div>
  );
}

export default App;
