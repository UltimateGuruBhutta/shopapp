import css from "../styles/CategoryPage.module.css";
import ProductCards from "./ProductsRow";

const CategoryPage = () => {
  return (
    <>
      {" "}
      <div>
        <div>
          <span>Casual</span>
          <div>Sort by </div>
        </div>
        <div>
         <ProductCards/>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
