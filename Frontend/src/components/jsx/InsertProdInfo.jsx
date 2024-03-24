import { createElement, useEffect, useState } from "react";
import css from "../styles/InsertProdInfo.module.css";
import axios from "axios";

const InsertProdInfo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [stock, setStock] = useState();
  const [inF, setInF] = useState(true);
  const [colorF, setColorF] = useState(true);

  const [getSize, setGetSize] = useState();
  const [getColor, setGetColor] = useState();

  const [send, setSend] = useState(false);

  useEffect(() => {
    if (send) {
      const data = { name, description, color, size, price, discount, stock }; // Define data inside the effect

      (async () => {
        try {
          const res = await axios.post("/AddProduct/add", data);
          console.log("Request is sent. Response:", res);
          setSend(false); // Reset send to prevent repeated sending
        } catch (err) {
          console.error("Something went wrong", err); // Note: it's console.error, not console.err
        }
      })();
    }
  }, [send]); // Dependency array includes only `send`

  const handleSizeInput = () => {
    setInF(true);
    if (getSize) {
      setSize((prev) => {
        return [...prev, getSize];
      });
      setGetSize("");
    }
  };
  const handleColorInput = () => {
    setColorF(true);
    if (getColor) {
      setColor((prev) => {
        return [...prev, getColor];
      });
      setGetColor("");
    }
  };

  return (
    <>
      <div className={css.container}>
        <button onClick={() => setSend(true)}> Send to Server</button>
        <span className={css.header}>General Informaiton</span>
        <div>
          <label htmlFor="name" className={css.tags}>
            Name of Product
          </label>
          <input
            type="text"
            id="name"
            className={`${css.w}`}
            onBlur={(e) => setName(e.target.value)}
          />

          <label htmlFor="desc" className={css.tags}>
            Description
          </label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            className={`${css.w}`}
            onBlur={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <span className={`${css.tags}`}>Color</span>
            <div className={`${css.sizeBox}`}>
              {color &&
                color.map((curr, index) => {
                  return (
                    <div className={`${css.mbtns}`} key={index}>
                      {curr}
                    </div>
                  );
                })}

              {colorF ? (
                <button onClick={() => setColorF(false)}>Add Color </button>
              ) : (
                <>
                  <input
                    type="text"
                    onChange={(e) => setGetSize(e.target.value)}
                  />{" "}
                  <button onClick={handleColorInput}> Enter </button>
                </>
              )}
            </div>
          </div>

          <div>
            <span className={`${css.tags}`}>Size</span>
            <div className={`${css.sizeBox}`}>
              {size &&
                size.map((curr, index) => {
                  return (
                    <div className={`${css.mbtns}`} key={index}>
                      {curr}
                    </div>
                  );
                })}

              {inF ? (
                <button onClick={() => setInF(false)}>Add Size </button>
              ) : (
                <>
                  <input
                    type="text"
                    onChange={(e) => setGetSize(e.target.value)}
                  />{" "}
                  <button onClick={handleSizeInput}> Enter </button>
                </>
              )}
            </div>
          </div>

          <h3>Pricing & Stock</h3>

          <div>
            <label htmlFor="basePrice" className={css.tags}>
              Base Pricing
            </label>
            <input
              type="text"
              id="basePrice"
              name="basePrice"
              className={`${css.w}`}
              onBlur={(e) => setPrice(e.target.value)}
            />

            <label htmlFor="stock" className={css.tags}>
              Stock
            </label>
            <input
              className={`${css.w}`}
              type="text"
              id="stock"
              name="basePrice"
              onBlur={(e) => setStock(e.target.value)}
            />

            <label className={css.tags} htmlFor="discount">
              Discount
            </label>
            <input
              className={`${css.w}`}
              type="text"
              id="discount"
              name="basePrice"
              onBlur={(e) => setDiscount(e.target.value)}
            />
            <span className={css.tags}>Add discount copon functionality</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertProdInfo;
