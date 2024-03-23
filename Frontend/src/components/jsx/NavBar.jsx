
import styles from '../styles/navbar.module.css'; // Import CSS Modules styles
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
       <Link to="/"> <h1>My Logo</h1></Link>
      </div>
      <ul className={styles.navigationList}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
       <Link to={"/AddProduct"} ><li><a href="#">Add Product</a></li></Link>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
