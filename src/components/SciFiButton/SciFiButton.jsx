import React from 'react'
import './SciFiButton.css'

const SciFiButton = ({ children, onClick  ,disabled,stock}) => {
  return (
     <button 
    className={`sci-fi-btn ${stock=== 0 ? 'disabled' : ''}`}
     disabled={disabled}
    onClick={onClick}
    >
    {children}
  </button>
  )
}

export default SciFiButton