import React from 'react'
import Items from '../Items/Items'
import './ItemsList.css'


const ItemsList = (props) => {
  return (
    <>
       <div className="galeria">
      {props.lista.length 
      ? props.lista.map((prod) => (
      <Items key={prod.id} {...prod}>
        <button>Comprar</button>
      </Items>) ) 
      : <p>No hay productos</p> }
    </div>
     
    
    </>
   
  )
}

export default ItemsList