import   { createContext, useState } from "react";

const qtyContext = createContext();

const QtyProvider = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [sz, setSz] = useState('');
  const [sclr, setSclr] = useState('');

  const assignQty = (fun) => {
    switch (fun) {
      case 'INCREMENT':
        setQty((prev) => prev + 1);
        break;
      case 'DECREMENT':
        setQty((prev) => (prev > 1 ? prev - 1 : 1));
        break;
      default:
        break;
    }
  };

  return (
    <qtyContext.Provider value={{ qty, assignQty, sz, setSz, sclr, setSclr }}>
      {children}
    </qtyContext.Provider>
  );
};

export { qtyContext, QtyProvider };
