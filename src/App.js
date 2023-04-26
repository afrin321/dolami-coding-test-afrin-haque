import React from "react";
import Nav from "./components/Nav";
import Market from "./components/Market";
import ProductPage from "./components/ProductPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
