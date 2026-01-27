import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Base";
import Hompage from "./Pages/Hompage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Hompage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
