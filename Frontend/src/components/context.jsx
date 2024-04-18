import   { createContext, useState } from "react";

const qtyContext = createContext();

const QtyProvider = ({ children }) => {

   
   const [cartlist,setCartlist]=useState([ ])

  const assignQty = (fun,index) => {
    switch (fun) {
      case 'INCREMENT':
        setCartlist((prev)=>{
          return [...prev,{...prev[index],qty:prev.qty+1}];
        })
        break;
      case 'DECREMENT':
        setCartlist((prev)=>{
          return [...prev,{...prev[index],qty:prev.qty>1?prev.qty-1:1}]
        })
        break;
      
    }
  };
 

  return (
    <qtyContext.Provider value={{ assignQty,cartlist,setCartlist }}>
      {children}
    </qtyContext.Provider>
  );
};

export { qtyContext, QtyProvider };
