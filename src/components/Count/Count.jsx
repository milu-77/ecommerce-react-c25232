import { useState } from 'react'
import './Count.css'
import SciFiButton from "../SciFiButton/SciFiButton";

export const Count = ({  onConfirm,stock}) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const confirm = () => {
    if (count > 0){
      onConfirm(count) 
    }
    setCount(1)
  }
  
  return (
    <div className='count-container'>
      <div className='quantity-selector'>
         
        <button className='btn' onClick={decrement} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button 
        className='btn quantity-btn' 
        onClick={increment}
        disabled={count >= stock}
               
        
        >
          +
        </button>
      </div>
      <SciFiButton
          onClick=  {confirm} 
          disabled={stock === 0}
          stock={stock}
        >
          {stock > 0 ? `Agregar ${count} al carrito` : "Sin stock"}
        </SciFiButton>
         
    </div>
  )
}