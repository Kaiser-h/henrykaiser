import React from "react";
import "./App.css";
import ViewDoc from "./components/ViewDoc";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="viewdoc" element={<ViewDoc />} />
      </Routes>
    </div>
  );
}

export default App;
