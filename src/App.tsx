import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HeadPhones from "./pages/Headphones";
import EarPhones from "./pages/EarPhones";
import Speakers from "./pages/Speakers";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/earphones" element={<EarPhones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/product/:slug" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
