import React, { useContext } from "react";
import css from "../styles/Cart.module.css";
import { qtyContext } from "../context";
import CartProductList from "./CartProductList";


const Cart = ({ handleClose }) => {

  const {cartlist,setCartlist}=useContext(qtyContext);
  const removeOrder=(index)=>{
    if(cartlist.length>0)
    {
      setCartlist(((prev)=>{
        let arr=prev;
        arr=arr.splice(index,1);
        return arr;
      }))
      console.log("Cart check",cartlist)
    }
  }





  return (
    <div className={css.container}>
      <div className={css.header}>
        <h3 className={css.title}>Cart</h3>
        <div className={css.cartBtns}>
          <button onClick={() => handleClose()}> close</button>
          {cartlist.length>0 ? <button>Finish Buying </button> : null}
      {console.log("inCart",cartlist)}
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
   
    return <CartProductList cartlist={cartlist} key={index} />






     


  }):<p style={{textAlign:"center"}}>cart is empty </p>



}
     

 
    </div>
  );
};







export default Cart;