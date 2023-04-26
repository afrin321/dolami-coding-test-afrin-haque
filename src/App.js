import React from "react";
import Nav from "./components/Nav";
import Market from "./components/Market";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" exact element={<Market />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
