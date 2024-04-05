import { useState } from "react";
import styles from "../../components/styles/Register.module.css"; // Ensure the correct path
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    picture: null,
  });

  const [picturePreview, setPicturePreview] = useState("");

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
      setPicturePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Create a FormData instance to handle file upload
    const registrationData = new FormData();
    registrationData.append("name", formData.name);
    registrationData.append("email", formData.email);
    registrationData.append("password", formData.password);
    // Append the file if one was chosen
    if (formData.picture) {
      registrationData.append("picture", formData.picture);
    }
        
    // Replace 'your_api_endpoint' with the endpoint where you want to send the form data
    const url = "http://localhost:3000/user/createUser";

    try {
      const response = await axios.post(url, registrationData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Server response:", response.data);

      // Handle successful registration here (e.g., redirect to a login page or display a success message)
    } catch (error) {
      console.error(
        "Registration error:",
        error.response ? error.response.data : error.message
      );
      // Handle errors here (e.g., display an error message)
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label htmlFor="picture" className={styles.label}>
          Picture:
        </label>
        <div className={styles.imageContainer}>
          {picturePreview ? (
            <img
              src={picturePreview}
              alt="Preview"
              className={styles.imagePreview}
            />
          ) : (
            <div className={styles.iconPlaceholder}>Icon</div> // Place your icon here
          )}
        </div>
        <input
          id="picture"
          name="picture"
          type="file"
          onChange={handleChange}
          className={styles.inputFile}
          required
        />

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
