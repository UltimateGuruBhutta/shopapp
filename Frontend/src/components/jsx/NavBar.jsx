import { useState } from "react";
import styles from "../styles/navbar.module.css"; // Import CSS Modules styles
import { Link } from "react-router-dom";
import Cart from "../jsx/Cart";

const Navbar = () => {
  const [cartOn, setCartOn] = useState(false);

  const handleClose=()=>{

    setCartOn((prev) => (prev ? false : true))

  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          {" "}
          <h1>My Logo</h1>
        </Link>
      </div>
      <ul className={styles.navigationList}>
        <Link to="/"> Home</Link>
        <li>
          <a>About</a>
        </li>
        <Link to={"/AddProduct"}>
          <li>
            <a href="#">Add Product</a>
          </li>
        </Link>
        <li>
          <a>Contact</a>
        </li>
        <li onClick={() => setCartOn((prev) => (prev ? false : true))}>
          {" "}
          Cart{" "}
        </li>
        {cartOn && (
          <div className={styles.cartPosition}>
            {" "}
            <Cart handleClose={handleClose} />{" "}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
