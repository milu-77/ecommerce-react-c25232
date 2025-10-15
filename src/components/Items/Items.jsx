import React from 'react'
import './items.css'

const Items = ( {...product}) => {
  return (
    <>

    <div className="product-card">
      <div className="card-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      
      <div className="card-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-author">{product.author}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="card-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-category">{product.category}</span>
        </div>
        
        <button className="add-to-cart-btn">
          Agregar al Carrito
        </button>
      </div>
    </div>
    
    </>
    
  )
}

export default Items