import React from 'react';
import css from "../styles/Cart.module.css"

const Cart = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Cart</h3>
      <div className={css.product}>
        <div className={css.productInfo}>
          <h4>title</h4>
          <h5>price</h5>
        </div>
        <div className={css.qty}>
          <button className={css.qtyButton}>-</button>
          <h5>qty</h5>
          <button className={css.qtyButton}>+</button>
        </div>
        <button className={css.cancelButton}>Cancel order</button>
      </div>
    </div>
  );
};

export default Cart;
