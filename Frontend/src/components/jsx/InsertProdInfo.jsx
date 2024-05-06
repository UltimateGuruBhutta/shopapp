import {   useState, useEffect } from "react";
import css from "../styles/InsertProdInfo.module.css";
 

// eslint-disable-next-line react/display-name
const InsertProdInfo =  ( {assignData,dataList} ) => {
  
  
  const [colorA, setColorA] = useState("");
  const [sizeA, setSizeA] = useState("");

  const [sizeF, setSizeF] = useState(true);
  const [colorF, setColorF] = useState(true);

  const {color}=dataList;
  const {size}=dataList; 



  useEffect(()=>{
  
  },[]);

  

  // useImperativeHandle(ref, () => ({
  //   submitForm: () => {
  //     formRef.current &&
  //       formRef.current.dispatchEvent(
  //         new Event("submit", { cancelable: true, bubbles: true })
  //       );
  //   },
  // }));
 
   
  const handleSizeAInput = () => {
    setSizeF(true);
    if (sizeA) {
     assignData("size",sizeA);
      setSizeA("");
    }
  };

  const handleColorAInput = () => {
    setColorF(true);
    if (colorA) {
      assignData("color",colorA);
      setColorA("");
    }
  };

  return (
    <>
      <div className={css.container}>
        
          
          <span className={css.header}>General Informaiton</span>
          <div>
            <label htmlFor="name"  className={css.tags}>
              Name of Product
            </label>
            <input
              type="text"
              id="name"
              className={`${css.w}`}
              onChange={(e)=>assignData(e.target.id,e.target.value)}
              
              value={dataList.name}
            />

            <label htmlFor="desc" className={css.tags}>
              Description
            </label>
            <textarea
              id="description"
              
              className={`${css.w}`}
              onChange={(e)=>assignData(e.target.id,e.target.value)}
              
              value={dataList.description}
            ></textarea>
            <div>
              <span className={`${css.tags}`}>Color</span>
              <div className={`${css.sizeBox}`}>
                {dataList.color.length>0  &&
                  color.map((curr, index) => {
                    return (
                      <div className={`${css.mbtns}`} key={index}>
                        {curr}
                      </div>
                    );
                  })}

                {colorF ? (
                  <button onClick={() => setColorF(false) } className={css.addBtn}>Add Color </button>
                ) : (
                  <>
                    <input
                      type="text"
                      id="color"
                
                      
                      onChange={(e) => setColorA(e.target.value)}
                    />{" "}
                    <button onClick={handleColorAInput}> Enter </button>
                  </>
                )}
              </div>
            </div>

            <div>
              <span className={`${css.tags}`}>Size</span>
              <div className={`${css.sizeBox}`}>
                {size.length>0   &&
                  size.map((curr, index) => {
                    return (
                      <div className={`${css.mbtns}`} key={index}>
                        {curr}
                      </div>
                    );
                  })}

                {sizeF ? (
                  <button onClick={() => setSizeF(false)}  className={css.addBtn}>Add Size </button>
                ) : (
                  <>
                    <input
                      id="size"
                      type="text"
                      onChange={(e) => setSizeA(e.target.value)}
                    />{" "}
                    <button onClick={handleSizeAInput}> Enter </button>
                  </>
                )}
              </div>
            </div>

            <h3>Pricing</h3>

            <div>
              <label htmlFor="basePrice" className={css.tags}>
                Base Pricing
              </label>
              <input
                type="number"
                id="price"
                
                className={`${css.w}`}
                placeholder="0"
                onChange={(e)=>assignData(e.target.id,Number(e.target.value))}


                
                value={dataList.price}
              />

              {/* <label htmlFor="stock" className={css.tags}>
                Stock
              </label>
              <input
                className={`${css.w}`}
                type="number"
                id="stock"
                
                placeholder="0"
                onChange={(e)=>assignData(e.target.id,Number(e.target.value))}

                
                value={dataList.stock}
              />
 */}
              <label className={css.tags} htmlFor="discount">
                Discount
              </label>
              <input
                className={`${css.w}`}
                type="number"
                id="discount"
                 
                placeholder="0"
                onChange={(e)=>assignData(e.target.id,Number(e.target.value))}

                value={dataList.discount}
              />
            </div>
          </div>
       
      </div>
    </>
  );
} 

export default InsertProdInfo;
