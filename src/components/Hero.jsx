import styles from './hero.module.css';

const CommerceHeroSection = () => {
  return (
    <>
      <div className={styles.heroContainer}> {/* Semantic name for container */}
        <div className={styles.heroContent}> <h1>Discover Your Style</h1>
          <p>Explore our latest collections and find exclusive deals on your favorite brands.</p>
          <a href="#shop-now" className={styles.heroCta}>Shop Now</a>
        </div>
      </div>
      <div className={styles.brandListContainer}> {/* Semantic name for container */}
        <span className={styles.brandName}>Brand 1</span>
        <span className={styles.brandName}>Brand 1</span>
        <span className={styles.brandName}>Brand 1</span>
        <span className={styles.brandName}>Brand 1</span>
        <span className={styles.brandName}>Brand 1</span>
      </div>
    </>
  );
};

export default CommerceHeroSection;
