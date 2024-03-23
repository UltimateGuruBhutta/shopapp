import css from "../styles/InsertProdInfo.module.css";

const InsertProdInfo = () => {
  return (
    <>
      <div className={css.container}>
        <span className={css.header}>General Informaiton</span>
        <div>
          <label htmlFor="name" className={css.tags}>
            Name of Product
          </label>
          <input type="text" id="name" className={`${css.w}`} />

          <label htmlFor="desc" className={css.tags}>
            Description
          </label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            className={`${css.w}`}
          ></textarea>
       

        
          <div >
            <span  className={`${css.tags}`}>Size</span>

            <div className={`${css.sizeBox}`}>
              <div className={`${css.mbtns}`}>XS</div>
              <div className={`${css.mbtns}`}>S</div>
              <div className={`${css.mbtns}`}>XL</div>
              <div className={`${css.mbtns}`}>XXL</div>
              <div className={`${css.mbtns}`}>M</div>
            </div>
          </div>
         

        
          <h3>Pricing & Stock</h3>

          <div>
            <label htmlFor="basePrice" className={css.tags}>
              Base Pricing
            </label>
            <input
              type="text"
              id="basePrice"
              name="basePrice"
              className={`${css.w}`}
            />

            <label htmlFor="stock" className={css.tags}>
              Stock
            </label>
            <input
              className={`${css.w}`}
              type="text"
              id="stock"
              name="basePrice"
            />

            <label className={css.tags} htmlFor="discount">Discount</label>
            <input
              className={`${css.w}`}
              type="text"
              id="discount"
              name="basePrice"
            />
            <span className={css.tags}>Add discount copon functionality</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertProdInfo;
