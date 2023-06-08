
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/myapp.css";
 
import CreatePage from "./Pages/CreatePage";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import OrderListPage from "./Pages/OrderListPage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/orders" element={<OrderListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  );
}

export default App;
