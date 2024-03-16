// ProductCards.jsx
import styles from './productSlider.module.css'; // Import the CSS Module

const ProductCards = ({ titleName }) => {
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', price: '$29.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 2, name: 'Product 2', price: '$39.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 3, name: 'Product 3', price: '$49.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 4, name: 'Product 4', price: '$39.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 5, name: 'Product 5', price: '$49.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 6, name: 'Product 6', price: '$39.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 7, name: 'Product 7', price: '$49.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 8, name: 'Product 8', price: '$39.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 9, name: 'Product 9', price: '$49.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 10, name: 'Product 10', price: '$39.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 11, name: 'Product 11', price: '$49.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
    { id: 12, name: 'Product 12', price: '$59.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐' },
    { id: 13, name: 'Product 13', price: '$69.99', imageUrl: 'https://via.placeholder.com/150', rating: '⭐⭐⭐⭐⭐' },
  ];

  return (
    <>
      <div className={styles.rowTitle}>
        <span className="title-name">{titleName}</span>
      </div>

      <div className="listContainer">
        <button className='btn'> left </button>
        <div className={styles.productCards}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.imageUrl} alt={product.name} className={styles.cardImage} />
            <div className={styles.cardInfo}>
            <h3>{product.id}</h3>
              <h3>{product.name}</h3>
              <p className={styles.rating}>{product.rating}</p>
              <p className={styles.price}>{product.price}</p>
            </div>
            
          </div>
        ))}
      </div>
        <button className='btn'> right </button>
      </div>
     
      
       
    </>
  );
};

export default ProductCards;
