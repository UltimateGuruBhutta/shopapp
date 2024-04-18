import { useContext } from "react";
import { qtyContext } from "../../components/context";
import css from "../styles/CartProductList.module.css";

const CartProductList = (cartlist) => {
  const { gdata,setGdata, assignQty } = useContext(qtyContext);
   

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
              <span className={css.title}>{cartlist.name}</span>{" "}
              <div className={css.dltIcn}> del </div>
            </div>
            <span className={css.sz}>
              {" "}
              Size:<span className={css.typ}> {cartlist.size}</span>
            </span>
            <span className={css.clr}>
              Color: <span className={css.typ}> {cartlist.color}</span>
            </span>
            <div className={css.qty}>
              <span className={css.price}>${cartlist.price}</span>
              <div className={css.btnsDiv}>
                <button
                  className={css.btn}
                  onClick={() => assignQty("DECREMENT")}
                >
                  -
                </button>
                {gdata.qty}{" "}
                <button
                  className={css.btn}
                  onClick={() => assignQty("INCREMENT")}
                >
                  +
                </button>
                {console.log("In Cart page ",gdata.qty,gdata.color,gdata.size)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductList;
