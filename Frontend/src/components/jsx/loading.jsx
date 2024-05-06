import PacmanLoader from 'react-spinners/PacmanLoader';
import styles from '../styles/Loader.module.css'

function Loader() {
  return (
    <div className={styles.container}>
        
      <PacmanLoader color="#278fb9" loading={true} size={25} />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loader;
