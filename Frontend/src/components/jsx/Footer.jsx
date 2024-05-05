import styles from "../styles/footer.module.css"; // Importing the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <span style={{ color: "r",fontSize:"3rem" }}>
          MO<span style={{ color: "#278fb9",fontSize:"3rem" }}>MOS</span>
        </span>
        <p className={styles.slogan}>Empowering Your Choices</p>
      </div>
      <div className={styles.footerContent}>
        <section className={styles.linksSection}>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </section>
        <section className={styles.socialMediaSection}>
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a href="http://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="http://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="http://instagram.com">Instagram</a>
            </li>
          </ul>
        </section>
        <section className={styles.contactSection}>
          <h5>Contact Us</h5>
          <p>email@example.com</p>
          <p>+123 456 7890</p>
        </section>
      </div>
      <div className={styles.copyRightSection}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
