import CartProductList from "../../components/jsx/CartProductList";
import CartSummary from "../../components/jsx/CartSummary";
import Footer from "../../components/jsx/Footer";

import css from "../styles/CartPage.module.css";

const CartPage = () => {

    

  return (
    <>
      <div className={css.container}>
        <div className={css.header}>Your Cart</div>

        <div className={css.cartDiv}>
          <CartProductList />
          <CartSummary />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
