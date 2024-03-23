import css from "../styles/CartSummary.module.css";
const CartSummary = () => {
  return (
    <>
      <div className={css.container}>
        <div className={`${css.header} ${css.bottomBoder}`}>Order Summary </div>
        <div className={css.two}>
          <span className={css.subtotal}>subtotal</span>
          <span className={css.price}> $123</span>{" "}
        </div>
        <div className={css.two}>
          <span className={css.subtotal}> Discount </span>
          <span className={`${css.price} ${css.red}`}> -$123</span>{" "}
        </div>
        <div className={`${css.two} ${css.bottomBoder}`}>
          <span className={css.subtotal}> Delivery Fee</span>
          <span className={css.price}> $123</span>
        </div>
        <div className={`${css.two} ${css.bottomBoder}`}>
          <span className={css.subtotal}> Total</span>
          <span className={`${css.price} ${css.total}  `}> $123</span>
        </div>
        <div className={css.two}>
          <input type="text" placeholder="promoCode" className={css.promo} />
          <button className={css.appbtn}>apply</button>
        </div>

        <button className={css.next}>Go to Checkout</button>
      </div>
    </>
  );
};

export default CartSummary;
