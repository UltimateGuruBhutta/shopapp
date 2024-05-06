import css from "../styles/HomePage.module.css";
import Hero from "../../components/jsx/Hero";
import ProductRow from "../../components/jsx/ProductsRow";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/jsx/Loading";

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
      <div className={css.header}>Most Bought</div>
      <div className={css.productWrapper}>
        {dat.length > 0 ? <ProductRow productList={dat} /> : <Loader />}
      </div>
       
    </>
  );
};

export default HomePage;
