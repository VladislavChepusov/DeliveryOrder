
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/myapp.css";
 

import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  );
}

export default App;
