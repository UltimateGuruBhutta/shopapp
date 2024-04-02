import { useEffect, useState } from "react";
import InsertImgs from "../../components/jsx/InsertImgs";
import InsertProdInfo from "../../components/jsx/InsertProdInfo";
import css from "../styles/AddProduct.module.css";
import axios from "axios";
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const initState = {
    name: "",
    description: "",
    color: [],
    size: [],
    price: 0,
    stock: 0,
    discount: 0,
    images: [],
  };
  const [formData, setFormData] = useState(initState);
  const [sendSwitch, setSendSwitch] = useState(false);

  // const sendData = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/product/add",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log("formData sent and res is ", res);
  //     setSendSwitch(false);
  //     toast.success("Product is Created", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Slide,
  //     });
  //     setFormData(initState);
  //     console.log("FormData in Sent:", formData);
  //   } catch (error) {
  //     toast.error("send error check internet connection", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Slide,
  //     });
  //     console.log("FormData in sent error:", formData);
  //   }
  // };
  const sendData = async () => {
    // Create a FormData object
    const formDataToSend = new FormData();

    // Append non-file fields to formData
    Object.keys(formData).forEach((key) => {
      if (key !== "images") {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append image files to formData
    // Assuming each item in formData.images is a File object
    formData.images.forEach((imageFile, index) => {
      formDataToSend.append(`images`, imageFile); // 'images' is the field name expected by the server
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/product/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // This is optional, Axios sets it automatically
          },
        }
      );
      console.log("Response:", response.data);
      toast.success("Product is Created");
      setFormData(initState);
      setSendSwitch(false); // Reset form data state after successful upload
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error("Upload error. Please check your internet connection.");
      setSendSwitch(false); 
    }
  };

  useEffect(() => {
    if (sendSwitch) {
      sendData();
    }
  }, [sendSwitch]);
  const handleSend = () => {
    if (checkValid()) {
      setSendSwitch(true);
    } else setSendSwitch(false);
  };

  const checkValid = () => {
    for (let key of Object.keys(formData)) {
      if(key=='discount')continue;
      if (formData[key] === initState[key]) {
        // send toast message to fill required field
        toast.error(`${key} is missing, Please fill ${key}`);

        console.log("Form is missing some fields");
        console.log("FormData in False:", formData);

        return false;
      }
      if (Array.isArray(formData[key]) && formData[key].length == 0) {
        toast.error(`${key} is missing, Please fill ${key}`);
        console.log("array line in productinfo");
        return false;
      }
    }
    console.log("FormData when true:", formData);
    return true;
  };

  const handleFormData = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: Array.isArray(prevFormData[key])
        ? key == "images"
          ? [...prevFormData[key], ...value]
          : [...prevFormData[key], value]
        : value,
    }));
  };

  return (
    <div className={css.container}>
      <button onClick={handleSend}>Send to Server</button>
      <InsertProdInfo assignData={handleFormData} dataList={formData} />
      <InsertImgs assignData={handleFormData} dataList={formData} />
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
