import {   useState } from "react";
import styles from "../styles/navbar.module.css"; // Import CSS Modules styles
import { Link } from "react-router-dom";
import Cart from "../jsx/Cart";

const Navbar = () => {
  const [cartOn, setCartOn] = useState(false);

  const handleClose = () => {
    setCartOn((prev) => (prev ? false : true));
  };
 
  return (
    <nav className={styles.navbar}  >
      <div className={styles.logo}>
        <Link to="/">
          <strong style={{color:"#16197d"}}>MOMO<strong  style={{color:"#278fb9"}}>ooS</text></text>
        </Link>
      </div>
      <div>
      <ul className={styles.navigationList}>
        <Link to="/"> Home</Link>

        <Link to={"/AddProduct"}>
          <li>
            <a>Add Product</a>
          </li>
        </Link>

        <li onClick={() => setCartOn((prev) => (prev ? false : true))}>Cart</li>
        {cartOn && (
          <div className={styles.cartPosition}>
            <Cart handleClose={handleClose} />
          </div>
        )}
      </ul>

      </div>
    </nav>
  );
};

export default Navbar;
