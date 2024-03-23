import css from "../styles/productInfoSection.module.css";
const ProductInfoSection = () => {
  return (
    <div>
      
      <div className={css.navProInfo}>
       
        <div className={css.navLinkDiv}> 
          Product Details
       </div>
       
        <div className={css.navLinkDiv}>
          FAQs
        </div>
       
        <div className={css.navLinkDiv}> 
          Rating & Reviews
        </div>
        
      </div>
    </div>
  );
};

export default ProductInfoSection;
