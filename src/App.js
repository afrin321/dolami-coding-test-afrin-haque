import React from "react";
import Nav from "./components/Nav";
import Market from "./components/Market";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" element={<Market />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
