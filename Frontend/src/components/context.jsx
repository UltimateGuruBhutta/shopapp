import   { createContext, useState } from "react";

const qtyContext = createContext();

const QtyProvider = ({ children }) => {

   
   const [cartlist,setCartlist]=useState([ ])

   const handleChange = (name, newValue, index) => {
    setCartlist(prev => {
        const updatedList = [...prev];
        updatedList[index] = {...updatedList[index], [name]: newValue};
        return updatedList;
    });
};

const handleDelete = (index) => {
  setCartlist((prev) => prev.filter((item, idx) => idx !== index));
};


  return (
    <qtyContext.Provider value={{ handleChange,handleDelete,cartlist,setCartlist }}>
      {children}
    </qtyContext.Provider>
  );
};

export { qtyContext, QtyProvider };
