import css from "../styles/HomePage.module.css";
import Hero from "../../components/jsx/Hero";
import ProductRow from "../../components/jsx/ProductsRow";
import { useEffect, useState } from "react";
import axios from "axios";
const HomePage = () => {
  const [dat, setDat] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/product/list");
      setDat(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Hero />
      <div>Product listing</div>
      <ProductRow productList={dat} />
      {console.log("home page : ", dat)}
    </>
  );
};

export default HomePage;
