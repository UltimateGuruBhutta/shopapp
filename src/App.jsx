 

import "./App.css";
import CategoryPage from "./components/jsx/CategoryPage";
import FilterProduct from "./components/jsx/FilterProduct";
import Footer from "./components/jsx/Footer";
// import Gallery from './components/Gallery'
// import Hero from './components/Hero'
//###################################
//###################################
//
import Navbar from "./components/jsx/NavBar";
import ProductDetails from "./components/jsx/ProductDetails";
import ProductInfoSection from "./components/jsx/ProductInfoSection";
import ProductRow from "./components/jsx/ProductsRow";
import ProductSlider from "./components/jsx/ProductSlider";
import RatingSection from "./components/jsx/RatingSection";
import CartProductList from "./components/jsx/CartProductList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <FilterProduct/> */}
      {/* <CategoryPage /> */}
      {/* <ProductRow /> */}
       <CartProductList/>
    </>
  );
}

export default App;
