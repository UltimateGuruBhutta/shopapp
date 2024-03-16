import styles from './Gallery.module.css';

const images = [
  { src: 'https://via.placeholder.com/150', alt: 'Casual dress' },
  { src: 'https://via.placeholder.com/150', alt: 'Formal dress' },
  { src: 'https://via.placeholder.com/150', alt: 'Party dress' },
  { src: 'https://via.placeholder.com/150', alt: 'Gym clothes' },
];

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {images.map((image, index ) => (
          <img
            key={image.alt}
            //className={styles[`item${index + 1}`]} // This corresponds to 'item1', 'item2', etc.
            className={`${styles.image} ${styles[`item${index + 1}`]}`}

            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
