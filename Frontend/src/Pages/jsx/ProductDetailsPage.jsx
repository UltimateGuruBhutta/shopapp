import { useParams } from "react-router-dom";
import ProductDetails from "../../components/jsx/ProductDetails";
import ProductInfoSection from "../../components/jsx/ProductInfoSection";
import RatingSection from "../../components/jsx/RatingSection";

import css from "../styles/ProductDetailPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const [data, setData] = useState();

  const param = useParams();
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/product/${param.id}`);
      setData(...res.data);
    console.log("RESData in ProductDetailsPage:", res.data);
       
      

    } catch (error) {
      console.log("Error we recieved ", error);
    }
  };
  useEffect(() => {
    getData();
}, []);

useEffect(() => {
    if (data) {
        console.log("Data in ProductDetailsPage:", data);
    }
}, [data]);  // Log data when it changes and is set


  return (
    <>
    {data ?
     (
      <>
        <ProductDetails props={data} />
        <ProductInfoSection />
        <RatingSection />
     
      </>
    ): <div> Loading....</div>}
    </>
  );
};

export default ProductDetailsPage;
