import { useEffect } from "react";
import css from "../styles/CartProductList.module.css";

const CartProductList = ({ props, handleChange, handleDelete, index }) => {
  // Increment and decrement functions are okay as they are.
  useEffect(() => {
    console.log("props items : ", props);
  }, [props]);

  const decrementQty = () => {
    const newQty = props.qty > 1 ? props.qty - 1 : 1;
    handleChange("qty", newQty, index);
  };

  const incrementQty = () => {
    handleChange("qty", props.qty + 1, index);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.card}>
          <img src={props.image} alt={`${props.name} image`} className={css.pImg} />
          <div className={css.prdtNfo}>
            <div className={css.header}>
              <span className={css.title}>{props.name}</span>
              <button className={css.dltIcn} onClick={() => handleDelete(index)}>Delete</button>
            </div>
            <span className={css.sz}>
              Size: <span className={css.typ}>{props.size}</span>
            </span>
            <span className={css.clr}>
              Color: <span className={css.typ}>{props.color}</span>
            </span>
            <div className={css.qty}>
              <span className={css.price}>${props.price}</span>
              <div className={css.btnsDiv}>
                <button className={css.btn} onClick={decrementQty}>-</button>
                {props.qty}
                <button className={css.btn} onClick={incrementQty}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductList;
