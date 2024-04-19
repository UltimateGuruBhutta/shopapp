import { useState } from "react";
import styles from "../styles/navbar.module.css"; // Import CSS Modules styles
import { Link } from "react-router-dom";
import Cart from "../jsx/Cart";

const Navbar = () => {
  const [cartOn, setCartOn] = useState(false);

  const handleClose = () => {
    setCartOn((prev) => (prev ? false : true));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: "none" }} >
          <span style={{ color: "#16197d" }}>
            MO<span style={{ color: "#278fb9" }}>MOS</span>
          </span>
        </Link>
      </div>
      <div>
        <div className={styles.navigationList}>
          <Link to="/" style={{ marginInline: "2rem" ,textDecoration: "none" }}>
            {" "}
            Home
          </Link>

          <Link to={"/AddProduct"}  style={{ marginInline: "2rem" ,textDecoration: "none" }}>
            Add Product
          </Link>

          <span
            style={{ marginInline: "2rem" }}
            onClick={() => setCartOn((prev) => (prev ? false : true))}
          >
            Cart
          </span>
          {cartOn && (
            <div className={styles.cartPosition}>
              <Cart handleClose={handleClose} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
