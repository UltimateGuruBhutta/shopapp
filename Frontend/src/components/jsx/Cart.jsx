import React, { useContext } from "react";
import css from "../styles/Cart.module.css";
import { qtyContext } from "../context";
import CartProductList from "./CartProductList";
import { useNavigate } from "react-router-dom";


const Cart = ({ handleClose }) => {
const navigate=useNavigate();
  const {cartlist,handleChange,handleDelete}=useContext(qtyContext);
  

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h3 className={css.title}>Cart</h3>
        <div className={css.cartBtns}>
          <button onClick={() => handleClose()}> close</button>
          {cartlist.length>0 ? <button onClick={()=>navigate(`/CartPage`)}>Finish Buying </button> : null}
     
        </div>
      </div>





{/*  
//
//
//
//
//
//
//
// body of cart
//
//
//
//
//
//
*/}






{
  cartlist.length>0 ? cartlist.map((obj,index)=>{
   
    return <CartProductList props={obj} handleChange={handleChange} handleDelete={handleDelete} index={index} key={index} />





     


  }):<p style={{textAlign:"center"}}>cart is empty </p>



}
     

 
    </div>
  );
};







export default Cart;