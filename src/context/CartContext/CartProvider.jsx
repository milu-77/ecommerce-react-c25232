import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // EXISTE YA EL PRODUCTO EN EL CARRITO?
  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  // AGREGAR PRODUCTO AL CARRITO
  const addItem = (prod) => {
    if (exists(prod.id)) {
      const updatedCart = cart.map((productos) => {
        if (productos.id === prod.id) {
          return { ...produc, quantity: productos.quantity + prod.quantity };
        } else {
          return productos;
        }
      });
      setCart(updatedCart);
      console.log(cart);
      alert("Agregando al carrito ");
      return;
    }
    setCart([...cart, prod]);
    alert(`${prod.name} agregando al carrito cantidad: ` + prod.quantity);
  };

  //VACIAR EL CARRITO
  const clearCart = () => setCart([]);

  //DEVUELVE CANTIDAD DE ITEMS EN EL CARRITO
  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };

  //BORRA DE ITEMS EN EL CARRITO
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  //DEVUELVE TOTAL DE PRECIO  DEL  CARRITO
  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;
  };

  //FINALIZA COMPRA
  const checkout = () => {
    const ok = confirm("¿Seguro que quiere finalizar la compra?")
    if (ok){
      alert("¡Compra realizada con éxito!")
      clearCart()
    }    
  }

  const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
