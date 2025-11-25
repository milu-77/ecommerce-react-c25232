import React from 'react';
import { useState } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = () => {
     const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return <Nav />;
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
    <Nav />
    
    
    
    </>

)
}

export default Header