import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sector 7G</h4>
          
         
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
             <li><a href="/Productos">Productos</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#"  ><span>Facebook</span></a>
            <a href="#"  ><span>X</span></a>
            <a href="#"  ><span>Instagram</span></a>
            <a href="#"  ><span>LinkedIn</span></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>    Sector 7G. Todos los derechos reservados.</p>
      </div>
    </footer>
    
    
    
    
    </>



  )
}

export default Footer