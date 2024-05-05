import styles from "../styles/productDetail.module.css";
import { bufferArrayToBase64 } from "../reuseableFunctions.js";
import { useContext, useEffect, useRef, useState } from "react";
import { qtyContext } from "../../components/context";
import { ToastContainer, toast } from "react-toastify";
import { LuMinus ,LuPlus} from "react-icons/lu";
const ProductDetails = ({ props }) => {
  const { cartlist, setCartlist } = useContext(qtyContext);
  const [pics, setPics] = useState(null);
  const [data, setData] = useState(null);

  const colorRefs = useRef([]);
  const sizeRefs = useRef([]);
 
  const selectEffect = (index,elementRef) => {
    const list=elementRef.current;
    const element = elementRef.current[index];
    console.log("jumbo index ", index, element);
    
    const style = window.getComputedStyle(element);
     
    if (style.backgroundColor === 'rgb(53, 86, 148)') {
      
      element.style.backgroundColor = 'rgb(0,45,203)';    }
     
      for(let i=0;i<list.length;i++)
      {
        if(i==index)
        continue;
      else
      {
         
        list[i].style.backgroundColor='rgb(53, 86, 148)';

      }
      }


  };
  
  

  useEffect(() => {
    if (pics) {
      //it will run when pics are set after props
      setData({
        id: props._id,
        qty: 1,
        size: null,
        color: null,
        price: props.price,
        name: props.name,
        image: pics[pics.length - 1],
      });
    }
  }, [props, pics]);

  useEffect(() => {
    if (props.images && props.images.length > 0) {
      const imgurl = props.images.map((img) => bufferArrayToBase64(img.data));
      setPics(imgurl);
    }
  }, [props.images]);

  // Logs can remain in a separate useEffect if needed frequently
  useEffect(() => {
    console.log("Card list data", cartlist);
    console.log("Data for list", data);
  }, [cartlist, data]);

  const addToCart = () => {
    console.log("data in productDetail", data);
    if (data.color == null) {
      toast.error("Select color first");
    }
    if (data.size == null) {
      toast.error("Select size first");
    } else {
      setCartlist((prev) => {
        // Finding the index of the item that needs an update
        const index = prev.findIndex(
          (item) =>
            item.id === data.id &&
            item.color === data.color &&
            item.size === data.size
        );

        // If the item exists and the quantity needs to be updated
        if (index !== -1) {
          // Only update if the quantities are different
          if (prev[index].qty !== data.qty) {
            const newArr = [...prev]; // Copy the array to maintain immutability
            newArr[index] = { ...newArr[index], qty: data.qty }; // Update the quantity
            return newArr; // Return the updated array
          }
          return prev; // Return the previous state if the quantity is the same
        } else {
          // If no item matches the criteria, add the new item
          return [...prev, data];
        }
      });
    }
  };

  if (!data) {
    return <div>loading....</div>;
  }

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.productleftSideImg}>
          {pics &&
            pics.map((curr, index) => (
              <img
                src={curr}
                alt={`${data.name} ${index}`}
                key={index}
                className={styles.sideImg}
              />
            ))}
        </div>

        {/* <div className={styles.productMainImg}>
          { pics && pics.length > 0 && (
            <img
              src={pics[pics.length-1]}
              alt={`${data.name} ${pics.length - 1}`}
              className={styles.mImg}
            />
          )}
        </div> */}

        <div className={styles.productInfo}>
          <span className={styles.productTitle}>{data.name}</span>
          {/* <span className={styles.productRating}>★★stars★★☆</span> */}
          <span className={styles.productPrice}>${data.price}</span>

          <h4 className={styles.head}> Select Color:</h4>
          <div className={styles.selectColor}>
            {props.color &&
              props.color.map((curr, index) => (
                <div
                  className={styles.color}
                  key={index} 
                  ref={(el) => (colorRefs.current[index] = el)}
                  onClick={() => {
                    setData((prev) => ({ ...prev, color: curr }));
                    selectEffect(index,colorRefs);
                  }}
                >
                  {curr}
                </div>
              ))}
          </div>

{/* 
///
///
/size maping 
///
//
// */}
          <h4 className={styles.head}>Select Size:</h4>
          <div className={styles.selectSize}>
            {props.size &&
              props.size.map((curr, index) => (
                <div
                  className={styles.sizebtn}
                  key={index}
                  ref={(el=>sizeRefs.current[index]=el)}
                  onClick={() => {
                    setData((prev) => ({ ...prev, size: curr }));
                    selectEffect(index,sizeRefs);
                    
                  }}
                >
                  {curr}
                </div>
              ))}
          </div>
          
          <div className={styles.cartDiv}>
            <div className={styles.qtyBtn}>
            <button
                className={styles.crtBtn}
                onClick={() =>
                  setData((prev) => {
                    return {
                      ...prev,
                      qty: prev.qty - 1 == 0 ? 1 : prev.qty - 1,
                    };
                  })
                }
              >
                <LuMinus />
              </button>
              <span style={{marginInline:'1rem'}}>{data.qty}</span>
              <button
                className={styles.crtBtn}
                onClick={() =>
                  setData((prev) => {
                    return { ...prev, qty: prev.qty + 1 };
                  })
                }
              >
             <LuPlus />
              </button>
            </div>

            <button className={styles.addToCartBtn} onClick={addToCart}  >
              Add to Cart
            </button>
          </div>

          <span className={styles.productDescription}>
            <h3>Description</h3>
            <i>{props.description}</i>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
