import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useCartContext } from "../../context/CartContext/useCartContext.js";
import ItemSimple from "../ItemSimple/ItemSimple.jsx";
import SciFiButton from "../SciFiButton/SciFiButton.jsx";

function Cart() {
  const { cart, clearCart, getTotalItems, deleteItem, total, checkout } =
    useCartContext();

  return (
    <>
      <h2>Carrito de compras</h2>
      <div className="carrito-container">
        {cart.length ? (
          cart.map((prod) => (
            <ItemSimple key={prod.id} {...prod}>
              <p>Cantidad: {prod.quantity}</p>
              <SciFiButton
                onClick={() => deleteItem(prod.id)}
                disabled={false}
                stock={NaN}
              >
                Eliminar
              </SciFiButton>
            </ItemSimple>
          ))
        ) : (
          <p className="msg-cart-vacio">Tu carrito está vacio 😟</p>
        )}
      </div>
      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total a pagar: ${total().toLocaleString("es-AR")}</p>
          </div>

 
            <SciFiButton
                onClick={checkout}
                disabled={false}
                stock={NaN}
              >
                Finalizar compra
              </SciFiButton>



                <SciFiButton
                onClick={clearCart}
                disabled={false}
                stock={NaN}
              >
                Vaciar carrito
              </SciFiButton>

 
        </div>
      ) : (
        <Link className="btn btn-volver" to="/">
          Volver al inicio
        </Link>
      )}
    </>
  );
}

export default Cart;
