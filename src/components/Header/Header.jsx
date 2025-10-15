import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
     const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <>
    <div className="promo-banner">
      <div className="promo-content">
        <span className="promo-icon"><strong>¡MEGA OFERTA!</strong></span>
        <p className="promo-text">
           50% OFF en productos seleccionados - 
          <span className="promo-highlight"> Envío gratis en compras +$5000</span>
        </p>
        <button 
          className="promo-close"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar banner"
        >
          ✕
        </button>
      </div>
    </div>
    
    
    
    </>

)
}

export default Header