import styles from "./productDetail.module.css";

const ProductDetails = () => {
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
          <span className={styles.productTitle}>Product Title</span>
          <span className={styles.productRating}>★★stars★★☆</span>
          <span className={styles.productPrice}>$99.99</span>
          <span className={styles.productDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro!
            Aut cum corporis, voluptatibus doloribus magni vitae unde officia
            voluptatem blanditiis repellendus, volafsfasfafuptates debitis
            natus.This is a great Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae magnam, omnis eius placeat in ipsam ducimus
            quae quibusdam reprehenderit accusamus eligendi impedit tenetur
            consectetur mollitia sequi dolores saepe ab officiis enim error.
            Neque, accusamus cum autem officiis voluptatibus possimus
            reprehenderit adipisci, est nam repellendus minus eum nobis
            corporis. Incidunt, quod. product that you should totally buy!
          </span>

          <div className={styles.selectColor}>
            <span className={styles.label}> Select Color:</span>

            <div className={styles.clrbtn}></div>
            <div className={styles.clrbtn}> </div>
          </div>

          <div className={styles.chooseSize}>
            <span className={`${styles.label} ${styles.sizeLabel}`}> Choose Size:</span>

            <div className={styles.sizebtn}>Small</div>
            <div className={styles.sizebtn}>Medium</div>
            <div className={styles.sizebtn}>Large</div>
            <div className={styles.sizebtn}>X-Large</div>
          </div>

          <div className={styles.cartDiv}>
            <div className={styles.qtyBtn}>
              <button className={styles.negBtn}>-</button>1
              <button className={styles.posBtn}>+</button>
            </div>
            <button className={styles.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
