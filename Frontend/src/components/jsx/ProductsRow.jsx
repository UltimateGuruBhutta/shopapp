import { Link } from "react-router-dom";
import styles from "../styles/productRow.module.css"; // Import the CSS Module

// Function to convert buffer array to base64 string
const bufferArrayToBase64 = (bufferArray) => {
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(bufferArray))
  );
  return `data:image/jpeg;base64,${base64String}`;
};

const ProductCards = ({ productList }) => {
  return (
    <>
      <div className={styles.productCards}>
        {productList.map((product) => (
          <Link to={`/ProductDetails/${product._id}`} key={product._id}>
            <div className={styles.card}>
              <img
                src={bufferArrayToBase64(product.images[product.images.length - 1].data)}
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
