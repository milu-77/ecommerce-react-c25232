import React, { useState } from 'react'
import SciFiButton from '../SciFiButton/SciFiButton';
import './Items.css'
import { useNavigate } from 'react-router-dom';

const Items = ( {...product}) => {
  const navigate = useNavigate();
  
  return (
    <>

    <div className="product-card">
      <div className='card-image'>
      <img src={product.imageUrl} alt={product.name} />
      </div>
      
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="author">{product.author}</p>
        <p className="description">{product.description}</p>
        
        {/* Precio y oferta */}
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

       

        {/* Botón agregar al carrito */}

        <SciFiButton 
         onClick = {() => { navigate(`/detail/${product.id}`) }}  
        disabled = {product.stock === 0}
        stock =   {product.stock  }
        >
          Mas info
        </SciFiButton>
         
      </div>
    </div>
  
    
    </>
    
  )
}

export default Items