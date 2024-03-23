import Footer from '../../components/jsx/Footer';
import ProductDetails from '../../components/jsx/ProductDetails';
import ProductInfoSection from '../../components/jsx/ProductInfoSection';
import RatingSection from '../../components/jsx/RatingSection';
import css from '../styles/ProductDetailPage.module.css';


const ProductDetailsPage = () => {
  return (
    <>
    <ProductDetails/>
    <ProductInfoSection/>
    <RatingSection/>
    <Footer/>
    
    </>
  )
}

export default ProductDetailsPage