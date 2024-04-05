import  { useState } from 'react';
import styles from "../../components/styles/Login.module.css"; // Ensure the path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted with email:", email, "and password:", password);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />

          <label htmlFor="password" className={styles.label}>Password:</label>
          <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />

          <button type="submit" className={styles.button}>Login</button>
          <button type="button" className={`${styles.button} ${styles.registerButton}`}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
