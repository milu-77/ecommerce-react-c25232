import { useState } from "react";
import SciFiButton from "../SciFiButton/SciFiButton";
import "./ItemDetail.css";
 import { useCartContext } from "../../context/CartContext/useCartContext.js";
  import { Count } from "../Count/Count" 

function ItemDetail({ ...product }) {
   const {addItem} = useCartContext()

     const handleAdd = (quantity) => {
       
    addItem({...product,quantity})
  }
 
  return (
    <div className="product-card">
      <div className="product-resume">
        <div className="card-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="author">{product.author}</p>
          <p className="publisher">Editorial: {product.publisher} </p>
          <p className="pages">Páginas: {product.pages}</p>
          <p className="year">Año: {product.year}</p>
          <p className="isbn">ISBN: {product.isbn}</p>
        </div>
      </div>
      <div className="product-summary">{product.longDescription}</div>
      <div className="product-price">
         <div className="price-section">
          {product.onSale ? (
            <>
              <span className="original-price">${product.originalPrice}</span>
              <span className="sale-price">${product.price}</span>
              <span className="discount-badge">¡OFERTA!</span>
            </>
          ) : (
            <span className="price">${product.price}</span>
          )}
        </div>        
        <div className="stock-info">
          {product.stock > 0 ? (
            <span className="in-stock">🟢 {product.stock} disponibles</span>
          ) : (
            <span className="out-of-stock">🔴 Sin stock</span>
          )}
        </div> 
        {product.stock > 0 && (
          <>
            <Count onConfirm={handleAdd} stock={product.stock}/>
 
          </>
        )}  
      </div>
    </div>
  );
}

export default ItemDetail;
