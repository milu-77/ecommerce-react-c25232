import React from 'react';
import './ItemSimple.css';

function ItemSimple({name,price,description,imageUrl,children}) {
  return (
   <article className="product-item"> 
      <img src={imageUrl} alt={description} />
      <h2>{name}</h2>
      <p>Precio: ${price.toLocaleString('es-AR')}</p>
      <p>Descripcion: {description}</p>
      {children}
    </article>
  )
}

export default ItemSimple