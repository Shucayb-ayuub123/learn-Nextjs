import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/Home/Product/:id" element={<Product />} />
        <Route path="/Home/Cart/:id" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
