import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FavBook from "./components/FavBook";
import CartContext from "./context/CartContext";
import ShoppingCart from "./components/ShoppingCart";
import Main from "./components/Main";
import SimpleSlider from "./components/SimpleSlider";
function App() {
  return (
    <>
      <CartContext>
        <SimpleSlider />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wishlist" element={<FavBook />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </CartContext>
    </>
  );
}

export default App;
