import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
   
    console.log(cart.type);
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (prod) => {
    if (exists(prod.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }

    setCart([...cart, prod]);
    alert(`${prod.name} agregando al carrito`);
  };



  const clearCart = () => setCart([]);

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };

  const values = { cart, addItem, clearCart, getTotalItems };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
