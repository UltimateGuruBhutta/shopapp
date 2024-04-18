import   { createContext, useState } from "react";

const qtyContext = createContext();

const QtyProvider = ({ children }) => {

   
   const [cartlist,setCartlist]=useState([ ])

   
 

  return (
    <qtyContext.Provider value={{cartlist,setCartlist }}>
      {children}
    </qtyContext.Provider>
  );
};

export { qtyContext, QtyProvider };
