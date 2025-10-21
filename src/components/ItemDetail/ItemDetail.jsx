import { useState } from "react";
import SciFiButton from "../SciFiButton/SciFiButton";
import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext/useCartContext"
 
function ItemDetail({ ...product }) {
   const {addItem} = useCartContext()

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (value) => {
    if (value < 1) return;
    if (value > product.stock) return;
    setQuantity(value);
  };
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Resetear después de agregar
  };

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

        {/* Stock */}
        <div className="stock-info">
          {product.stock > 0 ? (
            <span className="in-stock">🟢 {product.stock} disponibles</span>
          ) : (
            <span className="out-of-stock">🔴 Sin stock</span>
          )}
        </div>

        {/* Selector de cantidad */}
        {product.stock > 0 && (
          <div className="quantity-selector">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="quantity-btn"
            >
              -
            </button>

            <input
              type="number"
              value={quantity}
              min="1"
              max={product.stock}
              onChange={(e) =>
                handleQuantityChange(parseInt(e.target.value) || 1)
              }
              className="quantity-input"
            />

            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.stock}
              className="quantity-btn"
            >
              +
            </button>
          </div>
        )}

        {/* Botón agregar al carrito */}

        <SciFiButton
          onClick={()=> {addItem( product)}}
          disabled={product.stock === 0}
          stock={product.stock}
        >
          {product.stock > 0 ? `Agregar ${quantity} al carrito` : "Sin stock"}
        </SciFiButton>
      </div>
    </div>
  );
}

export default ItemDetail;
