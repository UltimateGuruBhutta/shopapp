import { useParams } from "react-router-dom";
import Footer from "../../components/jsx/Footer";
import ProductDetails from "../../components/jsx/ProductDetails";
import ProductInfoSection from "../../components/jsx/ProductInfoSection";
import RatingSection from "../../components/jsx/RatingSection";
import css from "../styles/ProductDetailPage.module.css";
import axios from "axios";
import { useEffect } from "react";





const ProductDetailsPage = () => {
  
  const param = useParams();
  const getData=async ()=>{
    try{
        const res = await axios.get(`http://localhost:3000/product/${param.prod_Id}`);
        
        console.log("in Product Detail Page response data", res.data);
    }
    catch(error)
    {
      console.log("Error we recieved ", error);
    
    }
    
    
    
      }
  



  useEffect(()=>{
    getData();

  },[])

  return (
    <>
      <ProductDetails />

      <ProductInfoSection />
      <RatingSection />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
