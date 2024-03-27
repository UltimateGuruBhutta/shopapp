import {useEffect, useState, useRef } from 'react';
import InsertImgs from "../../components/jsx/InsertImgs";
import InsertProdInfo from "../../components/jsx/InsertProdInfo";
import css from "../styles/AddProduct.module.css";
import axios from 'axios';

const AddProduct = () => {
  const insertProdInfoRef = useRef();
  const productImgRef = useRef();

  const [formData, setFormData] = useState({});
  const [imgList, setImgList] = useState([]);
  
const [send,setSend]=useState(false);
const [valid,setValid]=useState(false);
const handleValid=(ok)=>{
  setValid(ok);
}
const getValid=()=>{
  return valid;
}
  // This function is provided to InsertProdInfo to set formData in this component's state
  const handleFormData = (data) => {
    setFormData(data);
  };

  // This function is provided to InsertImgs to set imgList in this component's state
  const handleImgList = (list) => {
    setImgList(list);
  };

   

  const handleParentSubmit = async () => {
    // Trigger the form submission in InsertProdInfo
    // This should populate formData via handleFormData
      insertProdInfoRef.current.submitForm();
       
    productImgRef.current.submitForm();
     
    setSend(true);
      

     // Since submitForm() and handleFormData update state asynchronously,
    // we need to ensure formData is updated before sending. This could be 
    // achieved by moving the send logic to a useEffect hook that watches formData.
  };

  const sendDataToServer = async (payload) => {
    try {
      const response = await axios.post("http://localhost:3000/product/add", payload);
      console.log("well payload recieved ready to send",payload,response.data);
      
      // Handle success
    } catch (error) {
      console.error('it was doomed to fail, payload recieved', payload,error);
      // Handle error
    }
  };
  // Send data to server when formData is updated and not empty
  // Ensure to check that formData is not the initial empty object
  // Adjust this logic based on how your API expects to receive images
  useEffect(() => {
    if (Object.keys(formData).length > 0) { // Check if formData is not empty
      const payload = {
        ...formData,
        images: imgList,
      };
      sendDataToServer(payload);
    }




  }, [send]);

  return (
    <div className={css.container}>
      <button onClick={handleParentSubmit}>Send to Server</button>
      <InsertProdInfo ref={insertProdInfoRef} handleFormData={handleFormData} validfun={handleValid} />
      <InsertImgs ref={productImgRef} handleImgs={handleImgList} validvar={getValid}/>{console.log("in parent valid",valid)}
    </div>
  );
};

export default AddProduct;
