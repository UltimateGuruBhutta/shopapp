import { Link } from "react-router-dom";
import styles from "../styles/productDetail.module.css";
  
import { useContext } from "react";
import { qtyContext } from "../../components/context";
const ProductDetails = ({ props }) => {


  const {qty,setSclr,setSz,sz,sclr,assignQty}=useContext(qtyContext);
  
  

  return (
    
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.productleftSideImg}>
          <div className={styles.sideImg}>Image 1</div>
          <div className={styles.sideImg}>Image 2</div>
          <div className={styles.sideImg}>Image 3</div>
        </div>

        <div className={styles.productMainImg}>
          <div className={styles.mImg}>Main Image</div>
        </div>

        <div className={styles.productInfo}>
          <span className={styles.productTitle}>{props.name}</span>
          <span className={styles.productRating}>★★stars★★☆</span>
          <span className={styles.productPrice}>${props.price}</span>
          <span className={styles.productDescription}>{props.description}</span>

          <div className={styles.selectColor}>
            <span className={styles.label}> Select Color:</span>
            {props.color &&
              props.color.map((curr) => (
                <div className={styles.sizebtn} key={curr.id} onClick={()=>setSclr(curr)}>
                  {curr}
                  {console.log(sclr)}
                </div>
              ))}
          </div>

          <div className={styles.chooseSize}>
            <span className={`${styles.label} ${styles.sizeLabel}`}>
              {" "}
              Choose Size:
            </span>
            {props.size &&
              props.size.map((curr) => (
                <div className={styles.sizebtn} key={curr.id} onClick={()=>setSz(curr)}>
                  {curr}
                  {console.log(sz)}
                </div>
              ))}
          </div>

          <div className={styles.cartDiv}>
            <div className={styles.qtyBtn}>
              <button
                className={styles.negBtn}
                onClick={() =>assignQty('DECREMENT') }
              >
                -
              </button>
              {qty}
              <button
                className={styles.posBtn}
                onClick={() =>assignQty('INCREMENT') }
              >
                +
              </button>
            </div>
            <Link to={`/CartPage`}>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductDetails;
