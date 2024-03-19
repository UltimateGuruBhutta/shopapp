import "./App.css";
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

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/ProductDetails/:prod_Id/"
            element={<ProductDetailsPage />}
          />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
