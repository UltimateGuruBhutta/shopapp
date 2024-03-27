import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import css from "../styles/InsertProdInfo.module.css";
 

// eslint-disable-next-line react/display-name
const InsertProdInfo = forwardRef(({handleFormData ,validfun}, ref,) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState(0);
  const [inF, setInF] = useState(true);
  const [colorF, setColorF] = useState(true);

  const [getSize, setGetSize] = useState();
  const [getColor, setGetColor] = useState();

  const formRef = useRef(null); // For the form element

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formRef.current &&
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
    },
  }));

  const resetForm = () => {
    // Reset send to prevent repeated sending
    setName("");
    setDescription("");
    setColor([]);
    setSize([]);
    setPrice(0);
    setStock(0);
    setDiscount(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const data = { name, description, color, size, price, discount, stock };
      handleFormData(data);
      resetForm();
      validfun(true);
      

    } else {
      e.target.reportValidity();
    }
  };
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
        <form ref={formRef} onSubmit={handleSubmit}>
          
          <span className={css.header}>General Informaiton</span>
          <div>
            <label htmlFor="name" className={css.tags}>
              Name of Product
            </label>
            <input
              type="text"
              id="name"
              className={`${css.w}`}
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />

            <label htmlFor="desc" className={css.tags}>
              Description
            </label>
            <textarea
              id="desc"
              cols="30"
              rows="10"
              className={`${css.w}`}
              onChange={(e) => setDescription(e.target.value)}
              required
              value={description}
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
                      onChange={(e) => setGetColor(e.target.value)}
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
                placeholder="0"
                onChange={(e) => setPrice(e.target.value)}
                required
                value={price}
              />

              <label htmlFor="stock" className={css.tags}>
                Stock
              </label>
              <input
                className={`${css.w}`}
                type="text"
                id="stock"
                name="basePrice"
                placeholder="0"
                onChange={(e) => setStock(e.target.value)}
                required
                value={stock}
              />

              <label className={css.tags} htmlFor="discount">
                Discount
              </label>
              <input
                className={`${css.w}`}
                type="text"
                id="discount"
                name="basePrice"
                placeholder="0"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
});

export default InsertProdInfo;
