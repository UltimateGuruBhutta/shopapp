
import styles from './navbar.module.css'; // Import CSS Modules styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>My Logo</h1>
      </div>
      <ul className={styles.navigationList}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
