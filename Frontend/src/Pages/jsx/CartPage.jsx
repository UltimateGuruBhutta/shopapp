import { useContext } from "react";
import CartProductList from "../../components/jsx/CartProductList";
import CartSummary from "../../components/jsx/CartSummary";
import Footer from "../../components/jsx/Footer";
import { qtyContext } from "../../components/context";
import css from "../styles/CartPage.module.css";

const CartPage = () => {
  
  const {cartlist,handleChange,handleDelete}=useContext(qtyContext);
    

  return (

    <>
      <div className={css.container}>
        <div className={css.header}>Your Cart</div>

        <div className={css.cartDiv}>
        
{
  cartlist.length>0 ? cartlist.map((obj,index)=>{
   
    return <CartProductList props={obj} handleChange={handleChange} handleDelete={handleDelete} index={index} key={index} />





     


  }):<p style={{textAlign:"center"}}>cart is empty </p>



}
     
          <CartSummary />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
