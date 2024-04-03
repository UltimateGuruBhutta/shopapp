// ProductCards.jsx
import { Link } from "react-router-dom";
import styles from "../styles/productRow.module.css"; // Import the CSS Module
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/a2.jpg";
import ProductDetails from "../../Pages/jsx/ProductDetailsPage";
const ProductCards = ({ productList }) => {
  return (
    <>
      <div className={styles.productCards}>
        {productList.map((product, index) => (
          <Link to={`/ProductDetails/${product._id}`} key={product._id}>
            <div className={styles.card} key={index}>
              <img
                src={index % 2 == 0 ? pic1 : pic2}
                alt={product.name}
                className={styles.cardImage}
              />
              <div className={styles.cardInfo}>
                <h3>{product.name}</h3>

                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
 
    </>
  );
};

export default ProductCards;
