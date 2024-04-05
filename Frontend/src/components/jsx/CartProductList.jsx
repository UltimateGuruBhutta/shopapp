import { useContext } from "react";
import { qtyContext } from "../../components/context";
import css from "../styles/CartProductList.module.css";

const CartProductList = () => {
  const { qty, assignQty, sz, sclr } = useContext(qtyContext);

  return (
    <>
      {/* Todo use map function for dynamic  */}
      <div className={css.container}>
        <div className={css.card}>
          <img
            src="https://via.placeholder.com/120x170"
            alt=""
            className={css.pImg}
          />
          <div className={css.prdtNfo}>
            <div className={css.header}>
              <span className={css.title}>Title</span>{" "}
              <div className={css.dltIcn}> del</div>
            </div>
            <span className={css.sz}>
              {" "}
              Size:<span className={css.typ}> {sz}</span>
            </span>
            <span className={css.clr}>
              Color: <span className={css.typ}> {sclr}</span>
            </span>
            <div className={css.qty}>
              <span className={css.price}>$145</span>
              <div className={css.btnsDiv}>
                <button
                  className={css.btn}
                  onClick={() => assignQty("DECREMENT")}
                >
                  -
                </button>
                {qty}{" "}
                <button
                  className={css.btn}
                  onClick={() => assignQty("INCREMENT")}
                >
                  +
                </button>
                {console.log("In Cart page ",qty,sclr,sz)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductList;
