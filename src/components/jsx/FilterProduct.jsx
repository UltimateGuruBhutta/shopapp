import css from "../styles/FilterProduct.module.css";

const FilterProduct = () => {
  return (
    <>
      <div className={css.container}>
        <span className={css.secName}>Filters</span>

        <div className={css.header}>
          {" "}
          Price
          <div className={css.fltrOps}>
            <input type="range" name="" id="" className={css.priceRange} />
          </div>
        </div>

        {/* /// section repeating and i can make logic such that we will get
         attributes to filter from data and render them dynamically using map 
         function here */}
        {/* //////////////////////
////////////////////// */}
        <div className={css.header}>
          {" "}
          Color
          <div className={css.fltrOps}>
            <input type="range" name="" id="" className={css.priceRange} />
          </div>
        </div>

        {/* //////////////////////
////////////////////// */}

        <div className={css.header}>
          {" "}
          Size
          <div className={css.fltrOps}>
            <input type="range" name="" id="" className={css.priceRange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
