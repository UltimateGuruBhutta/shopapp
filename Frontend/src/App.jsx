import css from "./App.module.css";
import CategoryPage from "./components/jsx/CategoryPage";
import FilterProduct from "./components/jsx/FilterProduct";
import Footer from "./components/jsx/Footer";
// import Gallery from './components/Gallery'
// import Hero from './components/Hero'
//###################################
//###################################
//

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/jsx/NavBar";
import ProductDetails from "./components/jsx/ProductDetails";
import ProductInfoSection from "./components/jsx/ProductInfoSection";
import ProductRow from "./components/jsx/ProductsRow";
import ProductSlider from "./components/jsx/ProductSlider";
import RatingSection from "./components/jsx/RatingSection";
import CartProductList from "./components/jsx/CartProductList";
import HomePage from "./Pages/jsx/HomePage";

import ProductDetailsPage from "./Pages/jsx/ProductDetailsPage";
import CartPage from "./Pages/jsx/CartPage";
import AddProduct from "./Pages/jsx/AddProduct";
import { QtyProvider } from "../src/components/context";
import Login from "./components/jsx/Login";
import Register from "./components/jsx/Register";
import { useState } from "react";
 
function App() {
  
   

  return (

    <><div className={css.container}>
      <BrowserRouter>
        <QtyProvider>
          <Navbar  />
           
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/ProductDetails/:id/"
              element={<ProductDetailsPage />}
            />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/AddProduct" element={<AddProduct />} />
          </Routes>
        </QtyProvider>
      </BrowserRouter>
      {/* <Login/> */}

      {/* <Register /> */}
      {/* <AddProduct /> */}
      {/* <Cart/> */}
      </div>
    </>
  );
}

export default App;
