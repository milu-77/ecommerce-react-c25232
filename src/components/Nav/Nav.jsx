import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
     <>


 <nav className="navbar">
      <div className="nav-container">
         <a to="/" className="nav-logo">
          CompuMundoHiperMegaRed
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a to="/" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a to="" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a to="" className="nav-link">Ofertas</a>
          </li>
          <li className="nav-item">
            <a to="" className="nav-link">Contacto</a>
          </li>
        </ul>

        {/* Botón de carrito */}
        <div className="nav-actions">
          <button className="cart-button">
            Carrito (0)
          </button>
        </div>
      </div>
    </nav>
     </>


    
  )
}

export default Nav