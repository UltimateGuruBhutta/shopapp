import   { createContext, useState } from "react";

const qtyContext = createContext();

const QtyProvider = ({ children }) => {

  const [gdata,setGdata]=useState({
    "id":0,"qty":1,"size":"","color":"","price":0,"name":"","image":``,
  })
   const [cartlist,setCartlist]=useState([])

  const assignQty = (fun) => {
    switch (fun) {
      case 'INCREMENT':
        setGdata((prev)=>{
          return {...prev,qty:prev.qty+1};
        })
        break;
      case 'DECREMENT':
        setGdata((prev)=>{
          return {...prev,qty:prev.qty>1?prev.qty-1:1}
        })
        break;
      
    }
  };

  // const assignToOrderList=()=>{

  //   orderList= {
  //     productID=,

  //   }

  // }

  return (
    <qtyContext.Provider value={{ gdata,setGdata, assignQty,cartlist,setCartlist }}>
      {children}
    </qtyContext.Provider>
  );
};

export { qtyContext, QtyProvider };
